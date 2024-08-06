import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/ranking/ranking.component';

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
    new Chart("frequency", {
      type: "bar",
      data: {
        labels: ["Turma 1", "Turma 2", "Turma 3", "Turma 4"],
        datasets: [{
          data: [5, 4, 2, 1],
          backgroundColor: "#FFB500"
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            text: "Frequência",
            display: true,
            color: "white",
            font: {
              size: 32,
            },
            padding: {
              bottom: 25
            }
          },
          legend: {
            display: false
          }
        }
      },
    })

    new Chart("performace", {
      type: "line",
      data: {
        labels: ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56],
          fill: true,
          backgroundColor: "rgba(255, 181, 0, 0.5)",
          borderColor: '#FFB500',
          pointRadius: 0,
          tension: 0.7
        }]
      },
    })
  }
}
