import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TrailModel } from '../../../../core/models/trail.model';

@Component({
  selector: 'app-trail',
  standalone: true,
  imports: [],
  templateUrl: './trail.component.html',
  styleUrl: './trail.component.scss'
})
export class TrailComponent {
  @Input({ required: true }) trail!: TrailModel;
  @Input({ required: true }) isSelected!: boolean;
  @Output() event = new EventEmitter<TrailModel>();

  handleClick() {
    this.event.emit(this.trail);
  }
}
