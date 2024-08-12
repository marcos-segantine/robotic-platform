import { Component, Input } from "@angular/core";

@Component({
    selector: "app-student-icon",
    standalone: true,
    templateUrl: "./student.icon.svg",

})
export class StudentIcon {
    @Input({ required: true }) fillColor = "#FFFFFF";
}