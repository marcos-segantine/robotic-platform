import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ButtonType } from '../../../features/auth/enum/button-type-enum';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ required: true }) text = "";
  @Input({ required: true }) buttonType: ButtonType = ButtonType.Primary;
  @Output() event = new EventEmitter();

  buttonTypeValue = ButtonType;

  emitEvent() {
    this.event.emit()
  }
}
