import { Injectable } from '@angular/core';

import { UserDataModel } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private localStorage: Storage

  constructor() {
    this.localStorage = window.localStorage;
  }

  getUserData(): UserDataModel | null {
    const data = JSON.parse(this.localStorage.getItem("user-data") as string);

    if (data == "null") {
      return null
    }
    else {
      return data
    }
  }

  setUserData(userData: UserDataModel) {
    this.localStorage.setItem("user-data", JSON.stringify(userData));
    
    const userDataUpdated = this.getUserData();
    return userDataUpdated;
  }
}
