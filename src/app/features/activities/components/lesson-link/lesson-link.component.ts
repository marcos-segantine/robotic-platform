import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { ButtonType } from '../../../auth/enum/button-type-enum';

@Component({
  selector: 'app-lesson-link',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './lesson-link.component.html',
  styleUrl: './lesson-link.component.scss'
})
export class LessonLinkComponent {
  buttonType = ButtonType
}
