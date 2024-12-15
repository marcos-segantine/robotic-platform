import { Component } from '@angular/core';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { TrailComponent } from '../../components/trail/trail.component';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';

import { IMenu } from '../../../../shared/interfaces/menu.interface';

@Component({
  selector: 'app-add-activity',
  standalone: true,
  imports: [InputComponent, ButtonComponent, TrailComponent, MenuComponent],
  templateUrl: './add-activity.component.html',
  styleUrl: './add-activity.component.scss',
})
export class AddActivityComponent {
  sectionsData: Array<IMenu> = [
    {
      method: () => { },
      name: "Criar Trilha",
      path: "create-trail",
    },
    {
      method: () => { },
      name: "Adicionar Atividade",
      path: "add-activity",
    }
  ]
}
