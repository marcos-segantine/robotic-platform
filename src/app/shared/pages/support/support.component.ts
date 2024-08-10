import { Component } from '@angular/core';

import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';

import { ButtonType } from '../../../features/auth/enum/button-type-enum';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent {
  buttonType = ButtonType
}
