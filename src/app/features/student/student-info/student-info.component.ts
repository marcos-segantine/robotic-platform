import { Component, OnInit } from '@angular/core';

import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

import { ButtonType } from '../../auth/enum/button-type-enum';

import { UserDataService } from '../../../core/services/user-data.service';
import { UserDataModel } from '../../../core/models/user-data.model';

@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss'
})
export class StudentInfoComponent implements OnInit {
  buttonType = ButtonType
  userData: UserDataModel | null = null;

  currentPage = "page-2"

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData();
  }
}
