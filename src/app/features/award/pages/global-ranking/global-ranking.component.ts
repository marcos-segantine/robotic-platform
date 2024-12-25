import { Component, OnInit } from '@angular/core';

import { PointsIcon } from '../../../../../../public/assets/icons/sidebar/points/points.icon';

import { ActivityService } from '../../../../core/services/activity.service';
import { RankingModel } from '../../../../core/models/ranking.model';

import { School } from '../../../../core/enum/school.enum';

@Component({
  selector: 'app-global-ranking',
  standalone: true,
  imports: [PointsIcon],
  templateUrl: './global-ranking.component.html',
  styleUrl: './global-ranking.component.scss'
})
export class GlobalRankingComponent implements OnInit {
  bottomStudents: RankingModel[] = [];
  top3: RankingModel[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getRanking().subscribe(data => {
      this.top3 = data.slice(0, 3);
      this.bottomStudents = data.slice(3, data.length);
    });
  }

  getSchoolName(school: number) {
    const schoolName = School[school];
    if (schoolName === "Aparecida") return "M. Aparecida";
    return schoolName;
  }
}
