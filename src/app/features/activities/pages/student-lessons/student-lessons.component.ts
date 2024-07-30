import { Component } from '@angular/core';

import { LessonLinkComponent } from '../../components/lesson-link/lesson-link.component';
import { RankingComponent } from '../../../award/ranking/ranking.component';

@Component({
  selector: 'app-student-lessons',
  standalone: true,
  imports: [LessonLinkComponent, RankingComponent],
  templateUrl: './student-lessons.component.html',
  styleUrl: './student-lessons.component.scss'
})
export class StudentLessonsComponent {

}
