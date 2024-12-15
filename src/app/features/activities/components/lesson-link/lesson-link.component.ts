import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

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
  @Input({ required: true }) mode: "student" | "institutional" = 'student'

  constructor(private router: Router) { }

  navigateLessonPage() {
    if(this.mode === 'student') {
      this.router.navigate([`/app/student/activity/lessons/lesson`])
    }
    else {
      this.router.navigate([`/app/institutional/activity/lesson`])
    }
  }
}
