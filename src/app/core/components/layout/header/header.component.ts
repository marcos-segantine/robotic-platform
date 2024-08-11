import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ColorSchemeComponent } from '../../../../shared/components/color-scheme/color-scheme.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ColorSchemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({ required: true }) isLogged = false;
  @Input({ required: true }) isStudentOrProfessor = false;
}
