import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) text = "";
  @Input({ required: true }) buttonStyle: "default" | "selected" | "disable" = "default";
  @Input() width = "";
  @Input() backgroundColor = "";
  @Input() color = "";
  @Output() event = new EventEmitter();

  emitEvent() {
    this.event.emit()
  }
}
