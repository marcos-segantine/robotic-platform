import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-description',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './lesson-description.component.html',
  styleUrl: './lesson-description.component.scss'
})
export class LessonDescriptionComponent {
  @Input({ required: true }) activityDetails = {
    description: "",
    resources: [""],
  };
  @Input({ required: true }) data = {
    question: "",
    alternatives: [""],
  };
  @Input({ required: true }) isCompleted = false;

  constructor(private route: Router) { }

  goToQuestionPage() {
    if(this.isCompleted) {
      return;
    }

    this.route.navigate(
      ["app/student/activity/lessons/lesson/quiz"],
      { state: { data: this.data } })
  }
}
