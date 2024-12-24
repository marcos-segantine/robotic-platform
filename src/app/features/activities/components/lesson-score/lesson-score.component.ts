import { Component, Input, OnInit } from '@angular/core';
import { ActivityStatisticModel } from '../../../../core/models/activity.model';

@Component({
  selector: 'app-lesson-score',
  standalone: true,
  imports: [],
  templateUrl: './lesson-score.component.html',
  styleUrl: './lesson-score.component.scss'
})
export class LessonScoreComponent implements OnInit {
  @Input({ required: true }) statistic!: ActivityStatisticModel;
  @Input({ required: true }) activityWeight!: number;
  colorIndicator: "green" | "orange" | "red" | "default" = "default";

  ngOnInit(): void {
    if (this.statistic.points === 0 && this.statistic.isCompleted === false) {
      this.colorIndicator = "default";
    }
    else if (this.statistic.points > this.activityWeight * 90) {
      this.colorIndicator = "green";
    }
    else if (this.statistic.points > this.activityWeight * 40) {
      this.colorIndicator = "orange";
    }
    else {
      this.colorIndicator = "red";
    }
  }
}
