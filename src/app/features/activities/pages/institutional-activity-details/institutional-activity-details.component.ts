import { Component } from '@angular/core';

import { LessonDescriptionComponent } from '../../components/lesson-description/lesson-description.component';

@Component({
  selector: 'app-institutional-activity-details',
  standalone: true,
  imports: [LessonDescriptionComponent],
  templateUrl: './institutional-activity-details.component.html',
  styleUrl: './institutional-activity-details.component.scss'
})
export class InstitutionalActivityDetailsComponent {

}
