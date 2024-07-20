import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  footerMode: "primary" | "secondary" = "primary";

  constructor(private router: Router) { }

  updateFooterState() {
    this.footerMode = 'secondary'
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const currentPath = document.location.href.split('/').at(-1);

        if (currentPath === "" || currentPath === "login") this.footerMode = "primary"
        else this.footerMode = "secondary"
      }
    })
  }
}
