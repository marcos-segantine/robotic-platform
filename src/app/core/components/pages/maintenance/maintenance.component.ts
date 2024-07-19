import { Component } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonType } from '../../../../features/auth/enum/button-type-enum';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
  buttonType = ButtonType
}
