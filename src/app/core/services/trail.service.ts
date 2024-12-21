import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";
import { TrailModel } from "../models/trail.model";
import { ActivityModel } from "../models/activity.model";
import { Schooling } from "../enum/schooling.enum";

@Injectable({
  providedIn: 'root'
})
export class TrailService {
  private url = environment.api;

  constructor(private _httpClient: HttpClient) { }

  getTrails(schooling?: Schooling) {
    if (schooling) {
      return this._httpClient.get<Array<TrailModel>>(this.url + `get-trails?schooling=${schooling}`);
    }
    else {
      return this._httpClient.get<Array<TrailModel>>(this.url + 'get-trails');
    }
  }

  getAllActivities(id: string) {
    return this._httpClient.get<Array<ActivityModel>>(this.url + `get-activities?id=${id}`);
  }

  createTrail(trail: TrailModel) {
    return this._httpClient.post(this.url + 'create-trail', trail);
  }

  addActivity(trailID: string, activitiesID: Array<string>) {
    return this._httpClient.put(this.url + `add-activity?id=${trailID}`, activitiesID);
  }
}
