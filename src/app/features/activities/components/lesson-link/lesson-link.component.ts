import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { LessonScoreComponent } from "../lesson-score/lesson-score.component";
import { Router } from '@angular/router';
import { ActivityModel } from '../../../../core/models/activity.model';

import { ActivityService } from '../../../../core/services/activity.service';
import { UserDataService } from '../../../../core/services/user-data.service';

@Component({
  selector: 'app-lesson-link',
  standalone: true,
  imports: [ButtonComponent, LessonScoreComponent],
  templateUrl: './lesson-link.component.html',
  styleUrl: './lesson-link.component.scss'
})
export class LessonLinkComponent {
  @Input({ required: true }) data!: ActivityModel;
  @Input({ required: true }) currentTrailId!: string;

  constructor(
    private router: Router,
    private activityService: ActivityService,
    private userDataService: UserDataService
  ) { }

  navigateLessonPage() {
    const userID = this.userDataService.getUserData();

    if (userID === null) {
      console.log("ERROR OCCURED!");
      return;
    }

    const path = [userID.id, this.currentTrailId, this.data.id]
    const localData = localStorage.getItem(JSON.stringify(path));

    if (localData === null) {
      this.activityService.createStatistic(path).subscribe(data => {
        this.router.navigate(
          [`/app/student/activity/lessons/lesson`],
          {
            queryParams: {
              data: this.data.id
            }
          })
      })
    }
    else {
      this.router.navigate(
        [`/app/student/activity/lessons/lesson`],
        {
          queryParams: {
            data: this.data.id
          }
        })
    }
  }
}
