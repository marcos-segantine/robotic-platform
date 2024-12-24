import { Component, OnInit } from '@angular/core';

import { TrailActivitiesComponent } from '../../components/trail-activities/trail-activities.component';
import { LearningProgressComponent } from '../../../../shared/components/learning-progress/learning-progress.component';
import { NotFinishedComponent } from '../../../../shared/components/not-finished/not-finished.component';

import { TrailService } from '../../../../core/services/trail.service';
import { TrailModel } from '../../../../core/models/trail.model';

@Component({
  selector: 'app-student-activity',
  standalone: true,
  imports: [TrailActivitiesComponent, LearningProgressComponent, NotFinishedComponent],
  templateUrl: './student-activity.component.html',
  styleUrl: './student-activity.component.scss'
})
export class StudentActivityComponent implements OnInit {
  trails: Array<TrailModel> = [];
  trailsID: Array<string> = [];

  constructor(private trailService: TrailService) { }

  ngOnInit(): void {
    this.trailService.getTrails().subscribe(data => {
      this.trails = data;
      this.trailsID = this.trails.map(trail => trail.id);
    })
  }
}
