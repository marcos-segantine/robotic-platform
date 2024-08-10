import { Component } from '@angular/core';

import { LessonLinkComponent } from '../../components/lesson-link/lesson-link.component';

@Component({
  selector: 'app-institutional-activity',
  standalone: true,
  imports: [LessonLinkComponent],
  templateUrl: './institutional-activity.component.html',
  styleUrl: './institutional-activity.component.scss'
})
export class InstitutionalActivityComponent {

}
