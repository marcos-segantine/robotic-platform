import { Component, OnInit } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-quiz',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './student-quiz.component.html',
  styleUrl: './student-quiz.component.scss'
})
export class StudentQuizComponent implements OnInit {
  data = {
    question: "",
    alternatives: []
  }

  constructor(private router: Router) {
    this.data.question = this.router.getCurrentNavigation()?.extras?.state?.["data"].question;
    this.data.alternatives = this.router.getCurrentNavigation()?.extras?.state?.["data"].alternatives;
  }

  ngOnInit() {
  }
}
