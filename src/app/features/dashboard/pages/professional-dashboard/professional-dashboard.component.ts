import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/components/ranking/ranking.component';
import { FrequencyComponent } from '../../components/frequency/frequency.component';
import { StudentsLowPerformanceComponent } from '../../components/students-low-performance/students-low-performance.component';

import { Chart, ChartItem, registerables } from 'chart.js';
import { PlatformUseComponent } from "../../components/platform-use/platform-use.component";

import { dashDaskColors } from '../../../../core/enum/dashColors.enum';
import { dashLightColors } from '../../../../core/enum/dashColors.enum';

import { ActivityService } from '../../../../core/services/activity.service';

import { School } from '../../../../core/enum/school.enum';
import { MonthlyData } from '../../../../core/models/professionalDash.model';

Chart.register(...registerables);

@Component({
  selector: 'app-professional-dashboard',
  standalone: true,
  imports: [RankingComponent, FrequencyComponent, StudentsLowPerformanceComponent, PlatformUseComponent],
  templateUrl: './professional-dashboard.component.html',
  styleUrl: './professional-dashboard.component.scss'
})
export class ProfessionalDashboardComponent implements OnInit {
  dates: string[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    const chart_1_Ref = document.getElementById("chart-1") as ChartItem;

    this.activityService.getProfessionalDataDash().subscribe((data) => {
      const keys = Object.keys(data);

      this.dates = keys.map(date => date.split("-").reverse().join("/"));

      // Inicializando o objeto dataDash com o tipo correto
      const dataDash = {
        labels: this.dates,
        datasets: [] as {
          label: string;
          tension: number;
          pointRadius: number;
          data: number[];
          borderColor: string;
          backgroundColor: string;
          yAxisID: string;
        }[] // Array de objetos do tipo Dataset
      };

      // Lista de escolas
      const schools: (keyof MonthlyData)[] = ["djalma", "aparecida", "rosemir", "teodoro"];  // Tipando as escolas corretamente

      // Itera sobre as escolas e cria o dataset para cada uma
      schools.forEach((school, index) => {
        const schoolData = keys.map(key => data[key][school as keyof MonthlyData]); // Utilizando type assertion

        // Adiciona o dataset para cada escola
        dataDash.datasets.push({
          label: School[index], // Nome da escola
          tension: 0.7,
          pointRadius: 0,
          data: schoolData,  // Dados da escola
          borderColor: dashDaskColors[`Color${index + 1}` as keyof typeof dashDaskColors], // Acesso correto usando type assertion
          backgroundColor: dashDaskColors[`Color${index + 1}` as keyof typeof dashDaskColors], // Acesso correto usando type assertion
          yAxisID: index === 0 ? 'y' : 'y1', // Eixo Y alternado
        });
      });

      // Criando o gráfico com os dados dinâmicos
      new Chart(chart_1_Ref, {
        type: 'line',
        data: dataDash,
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
    });
  }
}
