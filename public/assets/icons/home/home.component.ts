import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-home-icon",
    templateUrl: "./home.component.svg",
})
export class HomeComponentIcon {
    @Input({ required: true }) fillColor = "#FFFFFF";
}