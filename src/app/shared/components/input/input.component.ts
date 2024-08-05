import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({ required: true }) size: "all" | "bigger" | "medium" | "small" = "medium";
  @Input({ required: true }) mode: "mode-1" | "mode-2" = "mode-1";
  @Input() additionalClasses: "margin" | "no-margin" = "margin";
  @Input() placeholder = "";
  @Input() text = "";
}
