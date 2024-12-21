import { Component, Input, OnInit } from '@angular/core';

import { StudentService } from '../../../core/services/student.service';
import { UserDataService } from '../../../core/services/user-data.service';
import { ActivityModel } from '../../../core/models/activity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-viewed',
  standalone: true,
  imports: [],
  templateUrl: './not-viewed.component.html',
  styleUrl: './not-viewed.component.scss'
})
export class NotViewedComponent implements OnInit {
  @Input({ required: true }) trailsID!: Array<string>;
  activitiesNotViewed: Array<ActivityModel> = [];

  constructor(
    private studentService: StudentService, 
    private userService: UserDataService,
    private route: Router
  ) { }

  ngOnInit(): void {
    const id = this.userService.getUserData()?.id;

    if (!id) {
      console.log('User not found');
      return;
    }

    this.studentService.getActivitiesNotViewed(id, this.trailsID).subscribe((data: any) => {
      this.activitiesNotViewed = data;
    });
  }

  navigateToActivity(id: string): void {
    this.route.navigate(
      ["app/student/activity/lessons/lesson"],
      { queryParams: { data: id } })
  }
}
