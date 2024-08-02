import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/ranking/ranking.component';

import { Chart, ChartItem, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-professional-dashboard',
  standalone: true,
  imports: [RankingComponent],
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
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      },
    });
  }
}
