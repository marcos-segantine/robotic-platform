import { Component } from '@angular/core';

import { TrailActivitiesComponent } from '../../components/trail-activities/trail-activities.component';
import { LearningProgressComponent } from '../../../../shared/components/learning-progress/learning-progress.component';
import { NotViewedComponent } from '../../../../shared/components/not-viewed/not-viewed.component';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';

import { IMenu } from "../../../../shared/interfaces/menu.interface"

@Component({
  selector: 'app-student-activity',
  standalone: true,
  imports: [TrailActivitiesComponent, LearningProgressComponent, NotViewedComponent, MenuComponent],
  templateUrl: './student-activity.component.html',
  styleUrl: './student-activity.component.scss'
})
export class StudentActivityComponent {
  options: Array<IMenu> = [
    {
      method: () => {},
      name: "Incompletas",
      path: "incomplete",
      isSelected: true,
    },
    {
      method: () => {},
      name: "Completas",
      path: "completed",
      isSelected: false
    }
  ]
}
