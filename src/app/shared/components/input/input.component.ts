import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input({ required: true }) size: "all" | "bigger" | "medium" | "small" = "medium";
  @Input({ required: true }) mode: "mode-1" | "mode-2" | "textarea" = "mode-1";
  @Input() property = ""; // For now, `property` is not required
  @Input() additionalClasses: "margin" | "no-margin" = "margin";
  @Input() placeholder = "";
  @Input() text = "";
  @Output() propertyChange = new EventEmitter<string>();

  emitEvent(event: Event) {
    const input = event.target as HTMLInputElement
    this.propertyChange.emit(input.value);
  }
}
