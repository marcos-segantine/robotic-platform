import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder = "";
  @Input({ required: true }) size: "bigger" | "medium" | "small" = "medium";
  @Input() text = "";
}
