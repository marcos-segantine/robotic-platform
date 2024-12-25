import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-platform-use',
  standalone: true,
  imports: [],
  templateUrl: './platform-use.component.html',
  styleUrl: './platform-use.component.scss'
})
export class PlatformUseComponent implements OnInit {
  ngOnInit(): void {
    const activityData = {
      labels: ["Uso frequente", "Uso regular", "Nunca acessou"],
      datasets: [
        {
          data: [7, 1, 3],
          backgroundColor: ["#00BA4A", "#FFB500", "#C3331D"],
          yAxisID: 'y',
          borderWidth: 0,
        },
      ]
    };

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
  }
}
