import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/components/ranking/ranking.component';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-institution-dashboard',
  standalone: true,
  imports: [RankingComponent],
  templateUrl: './institution-dashboard.component.html',
  styleUrl: './institution-dashboard.component.scss'
})
export class InstitutionDashboardComponent implements OnInit {
  ngOnInit(): void {
    const performanceData = {
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

    const frequencyData = {
      labels: ["Turma 1", "Turma 2", "Turma 3", "Turma 4"],
      datasets: [
        {
          data: [5, 2, 3, 4],
          backgroundColor: "orange",
          yAxisID: 'y',
        },
      ]
    };

    const activityData = {
      labels: ["Uso frequente", "Uso regular", "Nunca acessou"],
      datasets: [
        {
          data: [5, 2, 3],
          backgroundColor: ["#00BA4A", "#FFB500", "#C3331D"],
          yAxisID: 'y',
          borderWidth: 0,
        },
      ]
    };

    new Chart("frequency", {
      type: 'bar',
      data: frequencyData,
      options: {
        layout: {
          padding: 15
        },
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

    new Chart("activity", {
      type: 'doughnut',
      data: activityData,
      options: {
        layout: {
          padding: 15
        },
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

    new Chart("performance", {
      type: 'line',
      data: performanceData,
      options: {
        layout: {
          padding: 15
        },
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
