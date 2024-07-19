import { Component } from '@angular/core';

import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonType } from '../../enum/button-type-enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  buttonType = ButtonType;
}
