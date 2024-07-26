import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './core/components/layout/header/header.component';
import { FooterComponent } from './core/components/layout/footer/footer.component';

import { FooterEnum } from './shared/enums/footer.enum';

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

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        const pathArray = document.location.pathname.split("/")
        const pagePath = pathArray.at(-1);

        if (
          pagePath == "" ||
          pagePath == "login"
        ) this.footerMode = FooterEnum.Normal
        else this.footerMode = FooterEnum.Hidden
      }
    });
  }
}

