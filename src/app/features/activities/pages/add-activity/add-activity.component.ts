import { Component } from '@angular/core';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { TrailComponent } from '../../components/trail/trail.component';
import { MenuComponent } from '../../../../shared/components/menu/menu.component';

import { IMenu } from '../../../../shared/interfaces/menu.interface';

import { TrailModel } from '../../../../core/models/trail.model';
import { ActivityModel } from '../../../../core/models/activity.model';

import { TrailService } from '../../../../core/services/trail.service';

import { createUID } from '../../../../shared/utils/createUID.util';

import { LeftArrowIcon } from '../../../../../../public/assets/icons/left-arrow/leftArrow.icon';
import { ActivityService } from '../../../../core/services/activity.service';

@Component({
  selector: 'app-add-activity',
  standalone: true,
  imports: [InputComponent, ButtonComponent, TrailComponent, MenuComponent, LeftArrowIcon],
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
    id: createUID(),
    name: '',
    summarize: '',
    difficulty: null,
    activities: [],
    schooling: null
  }
  trailToSearch = "";
  trails: Array<TrailModel> | null = null;
  trailSelected: TrailModel | null = null;

  activity: ActivityModel = {
    id: '',
    title: '',
    summarize: '',
    question: '',
    alternatives: [],
    points: 0,
    resources: [],
    explanation: '',
    rightResponse: ''
  }
  alternativesTemp: Array<string> = [];
  rightResponse = "";

  constructor(private trailService: TrailService, private activityService: ActivityService) { }

  changeSection(section: "create-trail" | "add-activity") {
    // navigation
    this.currentSection = section;

    const currentPageIndex = section === "create-trail" ? 0 : 1;
    this.sectionsData.map((item, index) => {
      index === currentPageIndex ? item.isSelected = true : item.isSelected = false
    });

    // getting data to section
    if (section === 'add-activity') {
      this.getTrails();
    }

    // cleaning state from property
    this.newTrailData.name = "";
    this.newTrailData.summarize = "";
    this.newTrailData.difficulty = null;
    this.newTrailData.schooling = null;
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
      this.newTrailData = {
        id: createUID(),
        name: '',
        summarize: '',
        difficulty: null,
        activities: [],
        schooling: null
      }

      const sections = ["difficulty", "schooling"];

      for (const section of sections) {
        const father = document.getElementsByClassName(section)[0];
        const children = father.querySelectorAll("span");

        children.forEach(element => {
          element.classList.remove("selected")
        });
      }

      // cleaning textarea element
      const textareaRef = document.getElementsByTagName("textarea")[0];
      textareaRef.value = "";
    });
  }

  getTrails() {
    this.trailService.getTrails().subscribe((data) => {
      this.trails = data;
    });
  }

  addAlternativesTemp() {
    const father = document.getElementById("alternatives-container");
    const inputRef = father?.getElementsByTagName("input")[0];

    if (!inputRef) {
      console.log("input ref error");
      return;
    }

    const content = inputRef.value as string;

    if (content.trim() === "") {
      inputRef.value = "";
      return;
    }

    this.alternativesTemp.push(content);

    inputRef.value = "";
  }

  addDataToTrail() {
    this.activity.alternatives = this.alternativesTemp;
    this.activity.rightResponse = this.rightResponse;
    this.activity.id = createUID();

    this.activityService.saveActivity(this.activity).subscribe(data => {
      console.log(data);
    });

    this.trailService.addActivity(this.trailSelected?.id as string, [this.activity.id]).subscribe(data => {
      console.log(data);
    });

    // cleaning state form property to create a new activity
    this.activity.alternatives = [];
    this.activity.resources = [];
    this.activity.id = "";
    this.activity.points = 0;
    this.activity.question = "";
    this.activity.summarize = "";
    this.activity.explanation = "";
    this.activity.title = "";

    this.alternativesTemp = [];
  }

  selectTrail(trail: TrailModel) {
    this.trailSelected = trail;
  }

  addResources() {
    const father = document.querySelector(".lesson-details");
    const inputRef = father?.getElementsByTagName("input")?.[2];

    if (!inputRef) {
      console.log("input ref error");
      return;
    }

    const content = inputRef.value as string;

    if (content.trim() === "") {
      inputRef.value = "";
      return;
    }

    this.activity.resources.push(content);

    inputRef.value = "";
  }

  handleRightResponse(index: number) {
    const father = document.getElementById("alternatives-container");
    const children = father?.querySelectorAll(".handle-right-response");

    if (!children || children.length === 0) {
      console.log("children error");
      return;
    }

    this.rightResponse = this.alternativesTemp[index];

    for (const item of Array.from(children)) {
      if (children[index] === item) {
        item.classList.add("right-response");
        continue;
      }

      item.classList.remove("right-response");
    }
  }
}
