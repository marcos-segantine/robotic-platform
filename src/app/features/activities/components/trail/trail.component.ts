import { Component, Input } from '@angular/core';

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
}
