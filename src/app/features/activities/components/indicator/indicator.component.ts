import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './indicator.component.html',
  styleUrl: './indicator.component.scss'
})
export class IndicatorComponent {
  @Input() number: string | null = '0'
  @Input({ required: true }) color: "default" | "red" | "orange" | "green" | "white" = "default"
}
