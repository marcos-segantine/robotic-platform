import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IndicatorComponent } from "../indicator/indicator.component";
import { StatisticComponent } from "../statistic/statistic.component";

@Component({
  selector: 'app-trail-activities',
  standalone: true,
  imports: [IndicatorComponent, StatisticComponent, RouterLink],
  templateUrl: './trail-activities.component.html',
  styleUrl: './trail-activities.component.scss'
})
export class TrailActivitiesComponent {

}
