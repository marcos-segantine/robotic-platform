import { Component } from '@angular/core';

import { ColorSchemeComponent } from '../../../../shared/components/color-scheme/color-scheme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ColorSchemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
