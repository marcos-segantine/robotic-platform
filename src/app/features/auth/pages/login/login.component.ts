import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonType } from '../../enum/button-type-enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent, RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  buttonType = ButtonType;
}
