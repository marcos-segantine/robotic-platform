import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";
import { TrailModel } from "../models/trail.model";

@Injectable({
  providedIn: 'root'
})
export class TrailService {
  private url = environment.api;

  constructor(private _httpClient: HttpClient) { }

  createTrail(trail: TrailModel) {
    return this._httpClient.post(this.url + 'create-trail', trail);
  }

  getTrails() {
    return this._httpClient.get<Array<TrailModel>>(this.url + 'get-trails');
  }
  
  addActivity(trailID: string, activitiesID: Array<string>) {
    return this._httpClient.put(this.url + `add-activity?id=${trailID}`, activitiesID);
  }
}
