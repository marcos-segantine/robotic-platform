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

    createStatistic(path: Array<string>) {
        const key = JSON.stringify([...path]);
        const data = JSON.stringify({
            isCompleted: false,
            points: 0,
            viewed: false
        });

        localStorage.setItem(key, data);
        console.log(key, data);
        
        return this._httpClient.post(this.url + `create-statistic`, path);
    }

    updateStatistic(path: Array<string>, field: string, value: number) {
        const key = JSON.stringify([...path]);
        const localData = localStorage.getItem(key);

        if(localData === null) {
            console.log("ERROR WITH LOCAL DATA");
            return;
        }
        
        const data = JSON.parse(localData);
        data[field] = value;

        localStorage.setItem(key, JSON.stringify(data))

        return this._httpClient.put(this.url + `update-statistics?field=${field}&value=${value}`, path);
    }
}
