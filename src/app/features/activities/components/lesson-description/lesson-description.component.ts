import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../../shared/components/button/button.component";

import { ButtonType } from '../../../auth/enum/button-type-enum';

@Component({
  selector: 'app-lesson-description',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './lesson-description.component.html',
  styleUrl: './lesson-description.component.scss'
})
export class LessonDescriptionComponent {
  @Input({ required: true }) mode: "student" | "institutional" = "student"
  
  buttonType = ButtonType
}
