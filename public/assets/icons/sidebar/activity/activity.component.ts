import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-activity-icon",
    templateUrl: "./activity.component.svg",
})
export class ActivityComponentIcon {
    @Input({ required: true }) fillColor = "#FFFFFF";
}