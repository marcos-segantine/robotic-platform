import { Component, Input } from '@angular/core';

import { PointsIcon } from '../../../../../../public/assets/icons/points/points.icon';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [PointsIcon],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {
  // mode-1 is for students page
  @Input({ required: true }) mode: "mode-1" | "mode-2" = "mode-2"
}
