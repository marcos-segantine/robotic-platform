import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  standalone: true,
  imports: [],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.scss'
})
export class StatisticComponent implements OnInit {
  @Input({ required: true }) value = "";
  @Input({ required: true }) text = "";

  color: "red" | "orange" | "green" = "orange";

  ngOnInit(): void {
    const number = Number(this.value.replace(/\D/g, ''));

    if (number <= 50) this.color = "red";
    else if (number > 90) this.color = "green";
    else this.color = "orange";
  }
}
