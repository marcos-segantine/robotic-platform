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
      method: () => this.changeSection("create-trail"),
      name: "Criar Trilha",
      path: "create-trail",
      isSelected: true
    },
    {
      method: () => this.changeSection("add-activity"),
      name: "Adicionar Atividade",
      path: "add-activity",
      isSelected: false
    }
  ];
  currentSection: "create-trail" | "add-activity" = "create-trail";

  changeSection(section: "create-trail" | "add-activity") {
    this.currentSection = section;

    const currentPageIndex = section === "create-trail" ? 0 : 1;
    this.sectionsData.map((item, index) => {
      index === currentPageIndex ? item.isSelected = true : item.isSelected = false
    })
  }
}
