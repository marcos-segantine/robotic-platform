import { Component, Input } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

import { IMenu } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input({ required: true }) data: Array<IMenu> = [];
}
