import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { LessonScoreComponent } from "../lesson-score/lesson-score.component";
import { Router } from '@angular/router';
import { ActivityModel } from '../../../../core/models/activity.model';

@Component({
  selector: 'app-lesson-link',
  standalone: true,
  imports: [ButtonComponent, LessonScoreComponent],
  templateUrl: './lesson-link.component.html',
  styleUrl: './lesson-link.component.scss'
})
export class LessonLinkComponent {
  @Input({ required: true }) data!: ActivityModel;

  constructor(private router: Router) { }

  navigateLessonPage() {
    this.router.navigate(
      [`/app/student/activity/lessons/lesson`],
      {
        queryParams: {
          data: this.data.id
        }
      })
  }
}
