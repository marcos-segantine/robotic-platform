import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserType } from '../../enum/auth-options-enum,';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-option',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './auth-option.component.html',
  styleUrl: './auth-option.component.scss'
})
export class AuthOptionComponent {
  @Input({ required: true }) option = "";
  @Input({ required: true }) userType: UserType = UserType.Student;
  @Input({ required: true }) path = "";
}
