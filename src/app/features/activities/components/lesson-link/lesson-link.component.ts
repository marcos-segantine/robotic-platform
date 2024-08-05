import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { ButtonType } from '../../../auth/enum/button-type-enum';
import { LessonScoreComponent } from "../lesson-score/lesson-score.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-link',
  standalone: true,
  imports: [ButtonComponent, LessonScoreComponent],
  templateUrl: './lesson-link.component.html',
  styleUrl: './lesson-link.component.scss'
})
export class LessonLinkComponent {
  buttonType = ButtonType

  constructor(private router: Router) { }

  navigateLessonPage() {
    this.router.navigate([`/app/student/activity/lessons/lesson`])
  }
}
