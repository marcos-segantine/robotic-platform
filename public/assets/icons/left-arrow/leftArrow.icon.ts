import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-left-arrow-icon",
    templateUrl: "./leftArrow.icon.svg",
})
export class LeftArrowIcon {
    @Input({ required: true }) fillColor = "#FFFFFF";
}