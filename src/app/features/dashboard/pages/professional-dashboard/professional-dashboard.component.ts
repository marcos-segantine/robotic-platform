import { Component } from '@angular/core';

import { RankingComponent } from '../../../award/ranking/ranking.component';

@Component({
  selector: 'app-professional-dashboard',
  standalone: true,
  imports: [RankingComponent],
  templateUrl: './professional-dashboard.component.html',
  styleUrl: './professional-dashboard.component.scss'
})
export class ProfessionalDashboardComponent {
  
}
