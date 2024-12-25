import { Component, OnInit } from '@angular/core';

import { LearningProgressComponent } from '../../../../shared/components/learning-progress/learning-progress.component';
import { NotFinishedComponent } from '../../../../shared/components/not-finished/not-finished.component';
import { Chart, ChartItem, registerables } from 'chart.js';

import { TrailService } from '../../../../core/services/trail.service';

import { TrailModel } from '../../../../core/models/trail.model';
import { Router } from '@angular/router';
import { ActivityService } from '../../../../core/services/activity.service';
import { UserDataService } from '../../../../core/services/user-data.service';
import { StudentModel } from '../../../../core/models/student.model';
import { ProfessionalModel } from '../../../../core/models/professional.model';

Chart.register(...registerables);

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [LearningProgressComponent, NotFinishedComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent implements OnInit {
  chart: Chart | null = null;
  trails: Array<TrailModel> = [];
  trailsID: Array<string> = [];
  trailProcess: Record<string, number>= {};
  userData: StudentModel | ProfessionalModel | null = null;

  constructor(
    private trailService: TrailService,
    private route: Router,
    private activityService: ActivityService,
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    const ctx = document.getElementById('chart') as ChartItem;

    const userData = this.userDataService.getUserData();

    if (!userData) {
      console.log("ERROR WITH USER DATA");
      return;
    }

    this.userData = userData;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['',
          '',
          '',
          '',
          ''],
        datasets: [{
          data: [5000, 7500, 8000, 6000, 9000],
          tension: 0.7,
          pointRadius: 0,
          backgroundColor: 'rgba(255, 181, 0, .5)',
          borderColor: '#FFB500',
          borderWidth: 2,
          fill: 'start',
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            padding: 10,
            titleMarginBottom: 15,
            enabled: true,
            intersect: false,
            mode: 'nearest',
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';

                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed.y);
                }
                return label;
              }
            }
          }
        },
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: "#808080"
            }
          },
          y: {
            ticks: {
              color: "#808080",
            }
          },
        },
      },
    });

    this.trailService.getTrails().subscribe(data => {
      this.trails = data;
      this.trailsID = this.trails.map(trail => trail.id);

      const userID = this.userDataService.getUserData()?.id;

      if (!userID) {
        console.log("ERROR WITH USER ID");
        return;
      }

      for (const id of this.trailsID) {
        this.activityService.getStatistic([userID, id]).subscribe(data => {
          const activitiesCount = data.length;
          const activitiesCompleted = data.filter(activity => activity.isCompleted).length;
          
          this.trailProcess[id] = (activitiesCompleted / activitiesCount * 100) || 0;  
        })
      }
    })
  }

  navigateToLessons(id: string): void {
    this.route.navigate(
      ["app/student/activity/lessons"],
      { queryParams: { id: id } });
  }

  getColorIndicator(value: number): string {
    if (value > 70) {
      return 'green';
    } else if (value > 50) {      
      return 'oranger';
    } else {
      return 'red';
    }
  }
}
