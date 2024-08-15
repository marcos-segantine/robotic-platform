import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-frequency',
  standalone: true,
  imports: [],
  templateUrl: './frequency.component.html',
  styleUrl: './frequency.component.scss'
})
export class FrequencyComponent implements OnInit {

  ngOnInit(): void {
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


    new Chart("frequecy", {
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
    })
  }
}
