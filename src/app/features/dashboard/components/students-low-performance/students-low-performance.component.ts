import { Component, OnInit } from '@angular/core';

import { ActivityService } from '../../../../core/services/activity.service';

import { RankingModel } from '../../../../core/models/ranking.model';
import { School } from '../../../../core/enum/school.enum';

@Component({
  selector: 'app-students-low-performance',
  standalone: true,
  imports: [],
  templateUrl: './students-low-performance.component.html',
  styleUrl: './students-low-performance.component.scss'
})
export class StudentsLowPerformanceComponent implements OnInit {
  data: RankingModel[] = []

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activityService.getStudentLLowerPerformance().subscribe(data => {
      this.data = data
    })
  }

  getSchoolName(school: number) {
    const schoolName = School[school];
    if (schoolName === "Aparecida") return "M. Aparecida";
    return schoolName;
  }
}
