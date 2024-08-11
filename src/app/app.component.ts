import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/layout/header/header.component';
import { FooterComponent } from './core/components/layout/footer/footer.component';

import { FooterEnum } from './shared/enums/footer.enum';

import { UserDataService } from './core/services/user-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'robotic-platform';
  footerMode: FooterEnum = FooterEnum.Normal

  isLogged = false;
  isStudentOrProfessional = false;

  constructor(private router: Router, private userDataService: UserDataService) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        const pathArray = document.location.pathname.split("/")
        const pagePath = pathArray.at(-1);

        if (pathArray.includes("app")) this.isLogged = true;
        else this.isLogged = false;

        const userData = this.userDataService.getUserData();

        if (userData?.userType == "professional" || userData?.userType == "student") {
          this.isStudentOrProfessional = true
        }
        else {
          this.isStudentOrProfessional = false
        }

        if (
          pagePath == "" ||
          pagePath == "login"
        ) this.footerMode = FooterEnum.Normal
        else this.footerMode = FooterEnum.Hidden
      }
    });
  }
}

