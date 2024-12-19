import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IndicatorComponent } from "../indicator/indicator.component";
import { StatisticComponent } from "../statistic/statistic.component";
import { TrailModel } from '../../../../core/models/trail.model';

@Component({
  selector: 'app-trail-activities',
  standalone: true,
  imports: [IndicatorComponent, StatisticComponent, RouterLink],
  templateUrl: './trail-activities.component.html',
  styleUrl: './trail-activities.component.scss'
})
export class TrailActivitiesComponent {
  @Input({ required: true }) data!: TrailModel;
}
