import { Component } from '@angular/core';

import { PointsIcon } from '../../../../../../public/assets/icons/sidebar/points/points.icon';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [PointsIcon],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {
}