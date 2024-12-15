import { Component } from '@angular/core';
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

  constructor(private route: Router) { }

  goToQuesationPage() {
    this.route.navigate(["app/student/activity/lessons/lesson/quiz"])
  }
}
