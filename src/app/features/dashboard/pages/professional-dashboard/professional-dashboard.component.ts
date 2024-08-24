import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/components/ranking/ranking.component';
import { FrequencyComponent } from '../../components/frequency/frequency.component';
import { StudentsLowPerformanceComponent } from '../../components/students-low-performance/students-low-performance.component';

import { Chart, ChartItem, registerables } from 'chart.js';
import { PlatformUseComponent } from "../../components/platform-use/platform-use.component";

Chart.register(...registerables);

@Component({
  selector: 'app-professional-dashboard',
  standalone: true,
  imports: [RankingComponent, FrequencyComponent, StudentsLowPerformanceComponent, PlatformUseComponent],
  templateUrl: './professional-dashboard.component.html',
  styleUrl: './professional-dashboard.component.scss'
})
export class ProfessionalDashboardComponent implements OnInit {
  ngOnInit(): void {
    const chart_1_Ref = document.getElementById("chart-1") as ChartItem;
    const chart_2_Ref = document.getElementById("chart-2") as ChartItem;

    // Random data
      const data = {
        labels: ["labels", "labels", "labels", "labels", "labels"],
        datasets: [
          {
            label: 'Escola 1',
            tension: 0.7,
            pointRadius: 0,
            data: [1, 2, 3, 4, 5],
            borderColor: "red",
            backgroundColor: "red",
            yAxisID: 'y',
          },
          {
            label: 'Escola 2',
            tension: 0.7,
            pointRadius: 0,
            data: [5, 4, 3, 2, 1],
            borderColor: "green",
            backgroundColor: "green",
            yAxisID: 'y1',
          },
          {
            label: 'Escola 3',
            tension: 0.7,
            pointRadius: 0,
            data: [2, 4, 5, 2, 1],
            borderColor: "pink",
            backgroundColor: "pink",
            yAxisID: 'y1',
          },
          {
            label: 'Escola 4',
            tension: 0.7,
            pointRadius: 0,
            data: [1, 4, 5, 3, 1],
            borderColor: "purple",
            backgroundColor: "purple  ",
            yAxisID: 'y1',
          },
        ]
      };

    const frequency = {
      labels: ["Turma 1", "Turma 2", "Turma 3", "Turma 4"],
      datasets: [
        {
          data: [5, 2, 3, 4],
          backgroundColor: "orange",
          yAxisID: 'y',
          borderWidth: 0
        },
      ]
    };

    const appUses = {
      datasets: [
        {
          data: [5, 2, 3],
          backgroundColor: ["#00BA4A", "#FFB500", "#C3331D"],
          yAxisID: 'y',
          borderWidth: 0,
        },
      ]
    };

    new Chart(chart_1_Ref, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              boxWidth: 30,
            }
          },
          title: {
            display: false,
          },
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
          },
        }
      },
    });

    new Chart(chart_2_Ref, {
      type: 'bar',
      data: frequency,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          }
        },
      },
    });

    new Chart("app-uses", {
      type: 'doughnut',
      data: appUses,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false,
          }
        },
      },
    });
  }
}
