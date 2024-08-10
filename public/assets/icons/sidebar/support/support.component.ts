import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-support-icon",
    templateUrl: "./support.component.svg",
})
export class SupportComponentIcon {
    @Input({ required: true }) fillColor = "#FFFFFF";
}