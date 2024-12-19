import { Component, OnInit } from '@angular/core';

import { RankingComponent } from '../../../award/components/ranking/ranking.component';

import { LessonScoreComponent } from "../../components/lesson-score/lesson-score.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";

import { LessonDescriptionComponent } from '../../components/lesson-description/lesson-description.component';

import { ActivatedRoute, Router } from '@angular/router';
import { ActivityModel } from '../../../../core/models/activity.model';
import { ActivityService } from '../../../../core/services/activity.service';

@Component({
  selector: 'app-student-lesson',
  standalone: true,
  imports: [RankingComponent, LessonScoreComponent, ButtonComponent, LessonDescriptionComponent],
  templateUrl: './student-lesson.component.html',
  styleUrl: './student-lesson.component.scss'
})
export class StudentLessonComponent implements OnInit {
  data: ActivityModel | null = null;
  quizData = {
    question: "",
    alternatives: [""],
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService
  ) { }

  navigateToQuizPage() {
    this.router.navigate(["/app/student/activity/lessons/lesson/quiz"])
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['data'];

      this.activityService.getActivityByID(id).subscribe(data => {
        this.data = data;
        this.quizData.question = this.data.question;
        this.quizData.alternatives = this.data.alternatives;
      });
    });
  }
}
