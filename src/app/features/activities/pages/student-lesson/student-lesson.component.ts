import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/components/ranking/ranking.component';

import { LessonDescriptionComponent } from '../../components/lesson-description/lesson-description.component';

import { ActivatedRoute, Router } from '@angular/router';
import { ActivityModel } from '../../../../core/models/activity.model';
import { ActivityService } from '../../../../core/services/activity.service';
import { UserDataService } from '../../../../core/services/user-data.service';

@Component({
  selector: 'app-student-lesson',
  standalone: true,
  imports: [RankingComponent, LessonDescriptionComponent],
  templateUrl: './student-lesson.component.html',
  styleUrl: './student-lesson.component.scss'
})
export class StudentLessonComponent implements OnInit {
  data: ActivityModel | null = null;
  quizData = {
    question: "",
    alternatives: [""],
    trailID: "",
    activityID: "",
  }
  isCompleted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private userDataService: UserDataService
  ) { }

  navigateToQuizPage() {
    this.router.navigate(["/app/student/activity/lessons/lesson/quiz"])
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const activityID = params['data'];
      const traildID = params['trail'];

      const userID = this.userDataService.getUserData()?.id;

      if (!userID) {
        console.log("User not found");
        return;
      }

      this.activityService.getStatistic([userID, traildID, activityID]).subscribe(data => {
        this.isCompleted = data[0].isCompleted;

        if (this.isCompleted) return;

        this.activityService.getActivityByID(activityID).subscribe(data => {
          this.data = data;
          this.quizData.question = this.data.question;
          this.quizData.alternatives = this.data.alternatives;
          this.quizData.trailID = traildID;
          this.quizData.activityID = activityID;
        });
      })
    });
  }
}
