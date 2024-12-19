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
  data: Array<ActivityModel> = []
  
  activities: Array<ActivityModel> = [];

  constructor (private trailService: TrailService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];

      this.trailService.getAllActivities(id).subscribe(data => {
        this.activities = data;    
      })
    });
  }
}
