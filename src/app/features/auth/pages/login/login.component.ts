import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { UserDataService } from '../../../../core/services/user-data.service';
import { UserDataModel } from '../../../../core/models/user-data.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent, RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userDataService: UserDataService, private router: Router) { }

  login() {
    // after introduce back-end logic, remove this line
    const userData: UserDataModel | null = this.userDataService.setUserData({ name: "Marcos", userType: "professional" });

    if (userData !== null) {
      this.router.navigate([`app/${userData.userType}/home`])
    }
    else {
      throw new Error("USER DATA IS NULL")
    }
  }
}
