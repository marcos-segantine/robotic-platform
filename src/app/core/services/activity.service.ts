import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment";
import { ActivityModel } from "../models/activity.model";

@Injectable({
    providedIn: 'root'
})
export class ActivityService {
    private url = environment.api;

    constructor(private _httpClient: HttpClient) { }

    saveActivity(activity: ActivityModel) {
        return this._httpClient.post(this.url + 'create-activity', activity);
    }

    getActivityByID(id: string) {
        return this._httpClient.get<ActivityModel>(this.url + `get-activity?id=${id}`);
    }

    updateStatistic(path: Array<string>, field: string, value: number) {
        console.log(path, field, value);
        
        return this._httpClient.put(this.url + `update-statistics?field=${field}&value=${value}`, path);
    }
}
