import { Component, OnInit } from '@angular/core';

import { ActivityService } from '../../../core/services/activity.service';
import { UserDataService } from '../../../core/services/user-data.service';

@Component({
  selector: 'app-learning-progress',
  standalone: true,
  imports: [],
  templateUrl: './learning-progress.component.html',
  styleUrl: './learning-progress.component.scss'
})
export class LearningProgressComponent implements OnInit {
  data!: Record<string, any>;
  dataFormatted = {
    activitiesCompletedPercentage: 0,
    activitiesCompletedColorIndicator: "",
    activitiesViewedPercentage: 0,
    activitiesViewedColorIndicator: "",
    trailsCompletedPercentage: 0,
    trailsCompletedColorIndicator: "",
  }

  constructor(private activityService: ActivityService, private userDataService: UserDataService) { }

  ngOnInit(): void {
    const userId = this.userDataService.getUserData()?.id;

    if (!userId) {
      console.log("ERROR: User not found");
      return;
    }

    this.activityService.getLearningProgress(userId).subscribe((progress) => {
      this.data = progress;

      if (progress["activitiesCount"] > 0) {
        const activitiesCompletedPercentage = (progress["activitiesCompleted"] / progress["activitiesCount"]) * 100;
        this.dataFormatted.activitiesCompletedPercentage = activitiesCompletedPercentage;
        this.dataFormatted.activitiesCompletedColorIndicator = this.getColorIndicator(this.dataFormatted.activitiesCompletedPercentage);

        const activitiesViewedPercentage = (progress["activitiesViewed"] / progress["activitiesCount"]) * 100;
        this.dataFormatted.activitiesViewedPercentage = activitiesViewedPercentage;
        this.dataFormatted.activitiesViewedColorIndicator = this.getColorIndicator(this.dataFormatted.activitiesViewedPercentage);
      }

      if (progress["trailsCount"] > 0) {
        const trailsCompletedPercentage = (progress["trailsCompleted"] / progress["trailsCount"]) * 100;
        this.dataFormatted.trailsCompletedPercentage = trailsCompletedPercentage;
        this.dataFormatted.trailsCompletedColorIndicator = this.getColorIndicator(this.dataFormatted.trailsCompletedPercentage);
      }
    });

  }

  getColorIndicator(value: number): string {
    if (value > 70) {
      return "green";
    }
    if (value > 50) {
      return "orange";
    }
    return "red";
  }
}
