import { Component } from '@angular/core';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { TrailComponent } from '../../components/trail/trail.component';

import { ButtonType } from '../../../auth/enum/button-type-enum';

@Component({
  selector: 'app-add-activity',
  standalone: true,
  imports: [InputComponent, ButtonComponent, TrailComponent],
  templateUrl: './add-activity.component.html',
  styleUrl: './add-activity.component.scss',
})
export class AddActivityComponent {
  buttonType = ButtonType;
}
