import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { UserDataService } from '../../../../core/services/user-data.service';
import { UserDataModel } from '../../../../core/models/user-data.model';

import { StudentModel } from '../../../../core/models/student.model';
import { ProfessionalModel } from '../../../../core/models/professional.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputComponent, ButtonComponent, RouterLink, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private userDataService: UserDataService, private router: Router) { }

  login() {
    // after introduce auth back-end logic, remove this line

    // const userData: StudentModel = {
    //   id: "545f2587-dbff-4953-a905-956ef7ce17cf",
    //   name: "Marcos",
    //   userType: "student",
    //   school: null,
    //   schooling: null,
    //   scheduleClass: null,
    //   photoPath: null,
    //   points: 0,
    //   certificates: {
    //     done: [],
    //     inProgress: [],
    //     notStarted: []
    //   },
    //   statistics: []
    // }

    const userData: ProfessionalModel = {
      id: "545f2587-dbff-4953-a905-956ef7ce17cf",
      name: "Marcos",
      photoPath: "",
      userType: "professional",
    }

    this.userDataService.setUserData(userData);

    if (userData !== null) {
      this.router.navigate([`app/${userData.userType}/home`])
    }
    else {
      throw new Error("USER DATA IS NULL")
    }
  }
}
