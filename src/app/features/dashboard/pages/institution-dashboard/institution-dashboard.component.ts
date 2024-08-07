import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/ranking/ranking.component';

@Component({
  selector: 'app-institution-dashboard',
  standalone: true,
  imports: [RankingComponent],
  templateUrl: './institution-dashboard.component.html',
  styleUrl: './institution-dashboard.component.scss'
})
export class InstitutionDashboardComponent implements OnInit {
  ngOnInit(): void {
  }
}
