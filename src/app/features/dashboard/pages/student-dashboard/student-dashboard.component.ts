import { Component } from '@angular/core';

import { LearningProgressComponent } from '../../../../shared/components/learning-progress/learning-progress.component';
import { NotViewedComponent } from '../../../../shared/components/not-viewed/not-viewed.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [LearningProgressComponent, NotViewedComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss'
})
export class StudentDashboardComponent {

}
