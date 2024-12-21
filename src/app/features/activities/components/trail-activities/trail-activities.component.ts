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
        if (item.isCompleted) {
          if (item.points > 70) dataFormatted.push("green");
          else if (item.points > 50) dataFormatted.push("orange");
          else dataFormatted.push("red");
        }
        else {
          dataFormatted.push("default");
        }
      }

      this.statistics = dataFormatted;
    });
  }


}
