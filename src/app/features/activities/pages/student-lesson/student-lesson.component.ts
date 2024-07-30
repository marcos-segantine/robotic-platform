import { Component } from '@angular/core';

import { RankingComponent } from '../../../award/ranking/ranking.component';

import { LessonLinkComponent } from "../../components/lesson-link/lesson-link.component";
import { LessonScoreComponent } from "../../components/lesson-score/lesson-score.component";
import { ButtonComponent } from "../../../../shared/components/button/button.component";

import { ButtonType } from '../../../auth/enum/button-type-enum';

@Component({
  selector: 'app-student-lesson',
  standalone: true,
  imports: [RankingComponent, LessonLinkComponent, LessonScoreComponent, ButtonComponent],
  templateUrl: './student-lesson.component.html',
  styleUrl: './student-lesson.component.scss'
})
export class StudentLessonComponent {
  buttonType = ButtonType
}
