import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {
  // mode-1 is for students page
  @Input({ required: true }) mode: "mode-1" | "mode-2" = "mode-2"
}
