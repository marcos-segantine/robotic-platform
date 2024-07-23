import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HomeComponentIcon } from '../../../../../public/assets/icons/home/home.component';
import { ActivityComponentIcon } from '../../../../../public/assets/icons/activity/activity.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HomeComponentIcon, ActivityComponentIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  currentPage = "home";
  isToShowMenu = false;

  constructor(private router: Router) { }

  route(path: "home" | "add-activity") {
    this.router.navigate(["app/" + path])
    this.currentPage = path
  }

  showMenu() {
    const asideRef = document.getElementsByTagName("aside")[0];
    asideRef.classList.toggle("menu-active");
    
    this.isToShowMenu = !this.isToShowMenu
  }
}
