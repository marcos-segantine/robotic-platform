import { Component, OnInit } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActivityService } from '../../../../core/services/activity.service';
import { UserDataService } from '../../../../core/services/user-data.service';
import { ActivityModel } from '../../../../core/models/activity.model';

@Component({
  selector: 'app-student-quiz',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './student-quiz.component.html',
  styleUrl: './student-quiz.component.scss'
})
export class StudentQuizComponent implements OnInit {
  data = {
    question: "",
    alternatives: []
  }
  timer: number = 120;
  currentTrailAndActivity = {
    activityId: "",
    trailID: "",
  };
  activity!: ActivityModel;
  activityFinished: boolean = false;
  userID: string | undefined = "";
  alternativeSelected: number = -1;

  constructor(
    private router: Router,
    private location: Location,
    private activityService: ActivityService,
    private userDataService: UserDataService,
  ) {
    this.data.question = this.router.getCurrentNavigation()?.extras?.state?.["data"].question;
    this.data.alternatives = this.router.getCurrentNavigation()?.extras?.state?.["data"].alternatives;
    this.data.alternatives = this.router.getCurrentNavigation()?.extras?.state?.["data"].alternatives;

    this.currentTrailAndActivity.activityId = this.router.getCurrentNavigation()?.extras?.state?.["data"].activityId;
    this.currentTrailAndActivity.trailID = this.router.getCurrentNavigation()?.extras?.state?.["data"].trailID;
  }

  ngOnInit() {
    this.userID = this.userDataService.getUserData()?.id;

    if (!this.data.question && !this.data.alternatives) {
      console.log("redirecting user");
      this.router.navigate(['app/student/activity']);
      return;
    }

    this.updateTimer();

    this.activityService.getActivityByID(this.currentTrailAndActivity.activityId).subscribe(data => {
      this.activity = data;
    })
  }

  async updateTimer() {
    if (this.timer > 0) {
      await this.sleep(1000);
      this.timer--;
      this.updateTimer();
    }
    else {
      if (!this.userID) {
        console.log("User data not available");
        return;
      }

      if (this.activityFinished) {
        console.log("Activity already finished");
        return;
      }

      this.activityService.markActivityAsDone(0, [this.userID, this.currentTrailAndActivity.trailID, this.currentTrailAndActivity.activityId]);

      console.log("redirecting user");
      this.location.back();
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  convertSecondsToMinutes(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} : ${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
  }

  handleAlternative(index: number) {
    this.activityFinished = true;

    this.alternativeSelected = index;
  }

  confirmResponse() {
    const pontuation = this.activity.rightResponse === this.activity.alternatives[this.alternativeSelected] ?
      this.activity.points * this.timer : 0;

    if (this.userID) {
      this.activityService.markActivityAsDone(
        pontuation,
        [this.userID, this.currentTrailAndActivity.trailID, this.currentTrailAndActivity.activityId]
      ).subscribe(data => {
        console.log(data);
        this.router.navigate(['app/student/activity']);
      });
    }
  }
}
