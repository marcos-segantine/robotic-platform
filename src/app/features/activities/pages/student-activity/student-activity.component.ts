import { Component } from '@angular/core';

import { TrailActivitiesComponent } from '../../components/trail-activities/trail-activities.component';

@Component({
  selector: 'app-student-activity',
  standalone: true,
  imports: [TrailActivitiesComponent],
  templateUrl: './student-activity.component.html',
  styleUrl: './student-activity.component.scss'
})
export class StudentActivityComponent {

}
