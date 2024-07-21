import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from '../../../../shared/components/sidebar/sidebar.component';
import { AddActivityComponent } from '../../../../features/activities/pages/add-activity/add-activity.component';

@Component({
  selector: 'app-core-app',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, AddActivityComponent],
  templateUrl: './core-app.component.html',
  styleUrl: './core-app.component.scss'
})
export class CoreAppComponent {

}
