import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { dashDaskColors } from '../../../../core/enum/dashColors.enum';

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
          backgroundColor: [dashDaskColors.Color1, dashDaskColors.Color2, dashDaskColors.Color3, dashDaskColors.Color4],
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
