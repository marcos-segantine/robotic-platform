import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-student-quiz',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './student-quiz.component.html',
  styleUrl: './student-quiz.component.scss'
})
export class StudentQuizComponent {
}
