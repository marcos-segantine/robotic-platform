import { Component } from '@angular/core';

import { AuthOptionComponent } from '../../components/auth-option/auth-option.component';

import { UserType } from '../../enum/auth-options-enum,';

@Component({
  selector: 'app-auth-options',
  standalone: true,
  imports: [AuthOptionComponent],
  templateUrl: './auth-options.component.html',
  styleUrl: './auth-options.component.scss'
})
export class AuthOptionsComponent {
  userType = UserType;
}
