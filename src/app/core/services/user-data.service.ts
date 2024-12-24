import { Injectable } from '@angular/core';

import { UserDataModel } from '../models/user-data.model';
import { StudentModel } from '../models/student.model';
import { ProfessionalModel } from '../models/professional.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private localStorage: Storage

  constructor() {
    this.localStorage = window.localStorage;
  }

  getUserData(): StudentModel | ProfessionalModel | null {
    const data = JSON.parse(this.localStorage.getItem("user-data") as string);

    if (data == "null") {
      return null
    }
    else {
      return data['userType'] === "student" ? data as StudentModel : data as ProfessionalModel;
    }
  }

  setUserData(userData: StudentModel | ProfessionalModel) {
    this.localStorage.setItem("user-data", JSON.stringify(userData));

    const userDataUpdated = this.getUserData();
    return userDataUpdated;
  }
}
