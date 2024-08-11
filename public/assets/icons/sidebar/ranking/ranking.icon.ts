import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-ranking-icon",
    templateUrl: "./ranking.icon.svg",
})
export class RankingIcon {
    @Input({ required: true }) fillColor = "#FFFFFF";
}