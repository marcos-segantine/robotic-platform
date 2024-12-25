import { Component, OnInit } from '@angular/core';

import { PointsIcon } from '../../../../../../public/assets/icons/sidebar/points/points.icon';

import { ActivityService } from '../../../../core/services/activity.service';
import { RankingModel } from '../../../../core/models/ranking.model';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [PointsIcon],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent implements OnInit {
  topRanking: RankingModel[] = [];
  bottomRanking: RankingModel[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getRanking().subscribe((ranking: RankingModel[]) => {
      this.topRanking = ranking.slice(0, 3);
      this.bottomRanking = ranking.slice(3);
    });
  }
}