import { Component, OnInit } from '@angular/core';

import { LessonLinkComponent } from '../../components/lesson-link/lesson-link.component';
import { RankingComponent } from '../../../award/components/ranking/ranking.component';

import { ActivityModel } from '../../../../core/models/activity.model';
import { TrailService } from '../../../../core/services/trail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-lessons',
  standalone: true,
  imports: [LessonLinkComponent, RankingComponent],
  templateUrl: './student-lessons.component.html',
  styleUrl: './student-lessons.component.scss'
})
export class StudentLessonsComponent implements OnInit {
  data: Array<ActivityModel> = [];
  currentTrailId = "";
  
  activities: Array<ActivityModel> = [];
  activitiesCounter: number = 0;
  colorIndicator = "";
  numberIndicator = 0;

  constructor (private trailService: TrailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentTrailId = params['id'];

      this.trailService.getAllActivities(this.currentTrailId).subscribe(data => {
        this.activities = data;    
      })
    });
  }

  activitiesCompletedCounter() {
    this.activitiesCounter++;
    this.numberIndicator = this.activitiesCounter / this.activities.length * 100;
  
    if(this.numberIndicator > 70) this.colorIndicator = "green";
    else if(this.numberIndicator > 50) this.colorIndicator = "orange";
    else this.colorIndicator = "red";
  }
}
