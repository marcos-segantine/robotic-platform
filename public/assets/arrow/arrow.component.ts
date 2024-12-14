import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-arrow-icon",
    templateUrl: "./arrow.component.svg",
})
export class ArrowComponentIcon {
    @Input({ required: true }) fillColor = "#FFFFFF";
}