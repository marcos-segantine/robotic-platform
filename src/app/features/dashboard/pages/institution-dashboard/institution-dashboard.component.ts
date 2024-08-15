import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/components/ranking/ranking.component';
import { Chart } from 'chart.js';

import { FrequencyComponent } from '../../components/frequency/frequency.component';
import { PlatformUseComponent } from '../../components/platform-use/platform-use.component';
import { StudentsLowPerformanceComponent } from '../../components/students-low-performance/students-low-performance.component';

@Component({
  selector: 'app-institution-dashboard',
  standalone: true,
  imports: [RankingComponent, FrequencyComponent, PlatformUseComponent, StudentsLowPerformanceComponent],
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
