import { Component, Input, OnInit } from '@angular/core';

import { StudentService } from '../../../core/services/student.service';
import { UserDataService } from '../../../core/services/user-data.service';
import { ActivityModel } from '../../../core/models/activity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-finished',
  standalone: true,
  imports: [],
  templateUrl: './not-finished.component.html',
  styleUrl: './not-finished.component.scss'
})
export class NotFinishedComponent implements OnInit {
  @Input({ required: true }) trailsID!: Array<string>;
  activitiesNotFinished: Array<ActivityModel> = [];

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

    this.studentService.getActivitiesNotFinished(id, this.trailsID).subscribe((data: any) => {
      this.activitiesNotFinished = data;
    });
  }

  navigateToActivity(id: string): void {
    this.route.navigate(
      ["app/student/activity/lessons/lesson"],
      { queryParams: { data: id } })
  }
}
