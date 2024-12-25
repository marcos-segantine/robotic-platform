import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';
import { dashDaskColors } from '../../../../core/enum/dashColors.enum';
import { School } from '../../../../core/enum/school.enum';

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
      labels: [School[0], School[1], School[2], School[3]],
      datasets: [
        {
          data: [3.8, 4.5, 3, 4],
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
