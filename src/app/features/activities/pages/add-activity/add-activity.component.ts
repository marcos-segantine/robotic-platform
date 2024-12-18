import { Component } from '@angular/core';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { TrailComponent } from '../../components/trail/trail.component';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';

import { IMenu } from '../../../../shared/interfaces/menu.interface';

import { TrailModel } from '../../../../core/models/trail.model';
import { TrailService } from '../../../../core/services/trail.service';

import { v4 as uuidv4 } from 'uuid';

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
  newTrailData: TrailModel = {
    id: uuidv4(),
    name: '',
    resume: '',
    difficulty: null,
    activities: [],
    schooling: null
  }

  constructor(private trailService: TrailService) { }

  changeSection(section: "create-trail" | "add-activity") {
    this.currentSection = section;

    const currentPageIndex = section === "create-trail" ? 0 : 1;
    this.sectionsData.map((item, index) => {
      index === currentPageIndex ? item.isSelected = true : item.isSelected = false
    })
  }

  changeOption(op: number, type: "difficulty" | "schooling") {
    const father = document.getElementsByClassName(type)[0];
    const children = father.querySelectorAll("span");
    children.forEach((element, index) => {
      element.classList.toggle("selected", index === op)
    });

    switch (type) {
      case "difficulty":
        this.newTrailData.difficulty = op;
        break;
      case "schooling":
        this.newTrailData.schooling = op;
        break;
    }
  }

  createTrail() {
    this.trailService.createTrail(this.newTrailData).subscribe((data) => {
      console.log(data);
    });
  }
}
