import { Component, OnInit } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  timer: number = 120;

  constructor(private router: Router, private location: Location) {
    this.data.question = this.router.getCurrentNavigation()?.extras?.state?.["data"].question;
    this.data.alternatives = this.router.getCurrentNavigation()?.extras?.state?.["data"].alternatives;
  }

  ngOnInit() {
    if (!this.data.question && !this.data.alternatives) {
      console.log("redirecting user");
      this.router.navigate(['app/student/activity']);
      return;
    }

    this.updateTimer();
  }

  async updateTimer() {
    if (this.timer > 0) {
      await this.sleep(1000);
      this.timer--;
      this.updateTimer();
    }
    else {
      console.log("redirecting user");
      this.location.back();
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  convertSecondsToMinutes(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} : ${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
  }
}
