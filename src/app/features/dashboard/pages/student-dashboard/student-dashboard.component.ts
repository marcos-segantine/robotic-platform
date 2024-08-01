import { Component, OnInit } from '@angular/core';

import { LearningProgressComponent } from '../../../../shared/components/learning-progress/learning-progress.component';
import { NotViewedComponent } from '../../../../shared/components/not-viewed/not-viewed.component';
import { Chart, ChartItem, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [LearningProgressComponent, NotViewedComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent implements OnInit {
  chart: Chart | null = null;

  ngOnInit(): void {
    const ctx = document.getElementById('chart') as ChartItem;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January',
          'February',
          'March',
          'April',
          'May'],
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
  }
}
