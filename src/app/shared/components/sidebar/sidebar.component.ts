import { Component } from '@angular/core';

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
}
