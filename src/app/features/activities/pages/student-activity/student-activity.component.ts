import { Component } from '@angular/core';

import { TrailActivitiesComponent } from '../../components/trail-activities/trail-activities.component';
import { LearningProgressComponent } from '../../../../shared/components/learning-progress/learning-progress.component';
import { NotViewedComponent } from '../../../../shared/components/not-viewed/not-viewed.component';

@Component({
  selector: 'app-student-activity',
  standalone: true,
  imports: [TrailActivitiesComponent, LearningProgressComponent, NotViewedComponent],
  templateUrl: './student-activity.component.html',
  styleUrl: './student-activity.component.scss'
})
export class StudentActivityComponent {

}
