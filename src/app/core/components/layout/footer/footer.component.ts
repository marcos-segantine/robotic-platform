import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { FooterEnum } from '../../../../shared/enums/footer.enum';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input({ required: true }) footerMode: FooterEnum = FooterEnum.Normal;
}
