import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { LessonScoreComponent } from "../lesson-score/lesson-score.component";
import { Router } from '@angular/router';
import { ActivityModel, ActivityStatisticModel } from '../../../../core/models/activity.model';

import { ActivityService } from '../../../../core/services/activity.service';
import { UserDataService } from '../../../../core/services/user-data.service';

@Component({
  selector: 'app-lesson-link',
  standalone: true,
  imports: [ButtonComponent, LessonScoreComponent],
  templateUrl: './lesson-link.component.html',
  styleUrl: './lesson-link.component.scss'
})
export class LessonLinkComponent implements OnInit {
  @Input({ required: true }) data!: ActivityModel;
  @Input({ required: true }) currentTrailId!: string;
  @Output() event = new EventEmitter();
  currentUserId: string | undefined = undefined;
  activityStatistic!: ActivityStatisticModel;

  constructor(
    private router: Router,
    private activityService: ActivityService,
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    const userData = this.userDataService.getUserData();

    if (userData?.id) this.currentUserId = userData.id;
    else {
      console.log("ERROR OCCURED!");
      return;
    }

    if (!this.currentUserId) {
      console.log("ERROR OCCURED!");
      return;
    }

    this.activityService.getStatistic(
      [this.currentUserId, this.currentTrailId, this.data.id])
      .subscribe(data => {
        this.activityStatistic = data[0];
        if (this.activityStatistic.isCompleted) {
          this.event.emit();
        }
      })
  }

  navigateLessonPage() {
    if (!this.currentUserId) {
      console.log("ERROR OCCURED!");
      return;
    }

    const path = [this.currentUserId, this.currentTrailId, this.data.id]
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
            data: this.data.id,
            trail: this.currentTrailId
          }
        })
    }
  }
}
