import { Component } from '@angular/core';

import { RankingComponent } from '../../../award/components/ranking/ranking.component';

import { LessonLinkComponent } from "../../components/lesson-link/lesson-link.component";
import { LessonScoreComponent } from "../../components/lesson-score/lesson-score.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";

import { LessonDescriptionComponent } from '../../components/lesson-description/lesson-description.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-student-lesson',
  standalone: true,
  imports: [RankingComponent, LessonLinkComponent, LessonScoreComponent, ButtonComponent, LessonDescriptionComponent],
  templateUrl: './student-lesson.component.html',
  styleUrl: './student-lesson.component.scss'
})
export class StudentLessonComponent {
  constructor(private router: Router) { }

  navigateToQuizPage() {
    this.router.navigate(["/app/student/activity/lessons/lesson/quiz"])
  }
}
