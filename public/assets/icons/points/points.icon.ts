import { Component, Input, OnInit } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-points-icon",
    templateUrl: "./points.icon.svg",
})
export class PointsIcon implements OnInit {
    @Input({ required: true }) color: "gold" | "black" | "white" = "white";
    @Input() width = "35";
    iconColor = ""

    ngOnInit(): void {
        switch(this.color) {
            case "white":
                this.iconColor = "#FFFFFF";
                break;
            
            case "black":
                this.iconColor = "#000000";
                break;
            
            case "gold":
                this.iconColor = "#FFB500";
                break;
            
        }   
    }
}