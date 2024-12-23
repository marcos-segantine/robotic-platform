import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IndicatorComponent } from "../indicator/indicator.component";
import { StatisticComponent } from "../statistic/statistic.component";
import { TrailModel } from '../../../../core/models/trail.model';

import { UserDataService } from '../../../../core/services/user-data.service';
import { ActivityService } from '../../../../core/services/activity.service';

@Component({
  selector: 'app-trail-activities',
  standalone: true,
  imports: [IndicatorComponent, StatisticComponent, RouterLink],
  templateUrl: './trail-activities.component.html',
  styleUrl: './trail-activities.component.scss'
})
export class TrailActivitiesComponent implements OnInit {
  @Input({ required: true }) data!: TrailModel;
  statistics: Array<"default" | "red" | "orange" | "green" | "white"> = [];
  activityStatistic: Record<string, any> = {
    count: 0,
    completed: 0,
    weight: null
  }

  constructor(private userDataService: UserDataService, private activityService: ActivityService) { }

  ngOnInit(): void {
    const userId = this.userDataService.getUserData()?.id;
    if (!userId) {
      console.log("ERROR GETTING USER DATA");
      return;
    }
    this.activityService.getStatistic([userId, this.data.id]).subscribe(data => {
      const dataFormatted: Array<"default" | "red" | "orange" | "green" | "white"> = []

      for (const item of data) {
        this.activityStatistic["count"]++;

        if (item.isCompleted) {
          this.activityStatistic["completed"]++;

          const weight = getTaskWeight(item.points);
          this.activityStatistic["weight"] += weight;

          if (item.points > 70) {
            dataFormatted.push("green");
          } else if (item.points > 50) {
            dataFormatted.push("orange");
          } else {
            dataFormatted.push("red");
          }
        } else {
          dataFormatted.push("default");
        }
      }

      function getTaskWeight(score: number) {
        if (score > 70) {
          return 3;
        } else if (score > 50) {
          return 2;
        } else {
          return 1;
        }
      }

      const averagePerformance = this.activityStatistic["count"] > 0
        ? (this.activityStatistic["weight"] / (this.activityStatistic["count"] * 3)) * 100
        : 0;

      this.activityStatistic["weight"] = averagePerformance;
      this.statistics = dataFormatted;
    });
  }


}
