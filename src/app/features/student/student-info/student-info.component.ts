import { Component } from '@angular/core';

import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

import { ButtonType } from '../../auth/enum/button-type-enum';

@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss'
})
export class StudentInfoComponent {
  buttonType = ButtonType
}
