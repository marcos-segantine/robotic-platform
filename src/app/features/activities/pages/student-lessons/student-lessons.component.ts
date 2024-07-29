import { Component } from '@angular/core';

import { LessonLinkComponent } from '../../components/lesson-link/lesson-link.component';

@Component({
  selector: 'app-student-lessons',
  standalone: true,
  imports: [LessonLinkComponent],
  templateUrl: './student-lessons.component.html',
  styleUrl: './student-lessons.component.scss'
})
export class StudentLessonsComponent {

}
