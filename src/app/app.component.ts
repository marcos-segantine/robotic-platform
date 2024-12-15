import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/layout/header/header.component';

import { UserDataService } from './core/services/user-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'robotic-platform';

  isLogged = false;
  isStudentOrProfessional = false;

  constructor(private router: Router, private userDataService: UserDataService) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        const pathArray = document.location.pathname.split("/")

        if (pathArray.includes("app")) this.isLogged = true;
        else this.isLogged = false;

        const userData = this.userDataService.getUserData();

        if (userData?.userType == "professional" || userData?.userType == "student") {
          this.isStudentOrProfessional = true
        }
        else {
          this.isStudentOrProfessional = false
        }
      }
    });
  }
}

