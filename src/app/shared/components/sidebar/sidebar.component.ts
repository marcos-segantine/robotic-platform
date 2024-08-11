import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeComponentIcon } from '../../../../../public/assets/icons/home/home.component';
import { ActivityComponentIcon } from '../../../../../public/assets/icons/activity/activity.component';
import { SupportComponentIcon } from '../../../../../public/assets/icons/sidebar/support/support.component';
import { RankingIcon } from '../../../../../public/assets/icons/sidebar/ranking/ranking.icon';

import { UserDataService } from '../../../core/services/user-data.service';
import { UserDataModel } from '../../../core/models/user-data.model';

import { StudentProfileComponent } from "../../../features/profiles/pages/student-profile/student-profile.component";

import { ColorSchemeComponent } from "../color-scheme/color-scheme.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [HomeComponentIcon, ActivityComponentIcon, StudentProfileComponent, SupportComponentIcon, RankingIcon, ColorSchemeComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  currentPage = "home";
  isToShowMenu = false;

  userData: UserDataModel | null = null

  constructor(private router: Router, private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData();

    const fullCurrentPath = document.location.pathname
    if (fullCurrentPath.includes("activity")) {
      this.currentPage = "activity"
    }
    else if (fullCurrentPath.includes("home")) {
      this.currentPage = "home"
    }
    else if (fullCurrentPath.includes("support")) {
      this.currentPage = "support"
    }
    else if (fullCurrentPath.includes("ranking")) {
      this.currentPage = "ranking"
    }

    if (this.userData === null) {
      this.userData = null;
      throw new Error("USER DATA IS NULL")
    }
  }

  route(path: "home" | "activity" | "support" | "ranking") {
    if (!this.userData?.userType) {
      throw new Error("Can't route because user data is null")
    }

    this.router.navigate([`app/${this.userData.userType}/${path}`])
    this.currentPage = path
  }

  showMenu() {
    const asideRef = document.getElementsByTagName("aside")[0];
    asideRef.classList.toggle("menu-active");

    this.isToShowMenu = !this.isToShowMenu
  }
}
