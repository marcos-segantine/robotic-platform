import { Component, OnInit } from '@angular/core';

import { TitleComponent } from '../../components/title/title.component';

import { StudentModel } from '../../../../core/models/student.model';
import { UserDataService } from '../../../../core/services/user-data.service';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent implements OnInit {
  userData: StudentModel | null = null;
  name = '';

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData() as StudentModel;
    this.name = this.userData.name.split(' ').splice(0, 2).join(' ');
  }
}
