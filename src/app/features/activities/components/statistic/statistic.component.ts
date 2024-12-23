import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent implements OnInit {
  @Input({ required: true }) value = 100;
  @Input({ required: true }) text = "";

  color: "red" | "orange" | "green" = "orange";

  ngOnInit(): void {
    if (this.value <= 50) this.color = "red";
    else if (this.value > 90) this.color = "green";
    else this.color = "orange";
  }
}
