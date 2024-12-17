import { Component, OnInit } from '@angular/core';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { UserDataService } from '../../../../core/services/user-data.service';
import { UserDataModel } from '../../../../core/models/user-data.model';
import { StudentService } from '../../../../core/services/student.service';

import { StudentModel } from "../../../../core/models/student.model";

import { MenuComponent } from '../../../../shared/components/menu/menu.component';

import { v4 as uuidv4 } from 'uuid';

import { validateIfNonNullOrUndefined } from '../../../../shared/validations/validateIfNonNull.validate';


@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [InputComponent, ButtonComponent, MenuComponent],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss'
})
export class StudentInfoComponent implements OnInit {
  userData: UserDataModel | null = null;
  sectionsData = [
    {
      path: "page-1",
      name: "Chamada",
      method: () => this.changeSection("page-1"),
      isSelected: true,
    },
    {
      path: "page-2",
      name: "Pesquisar por Aluno",
      method: () => this.changeSection("page-2"),
      isSelected: false,
    },
    {
      path: "page-3",
      name: "Cadastrar Aluno",
      method: () => this.changeSection("page-3"),
      isSelected: false,
    },
  ];
  currentPage = "page-1";
  newStudentInfo: StudentModel = {
    id: uuidv4(),
    name: '',
    school: null,
    schooling: null,
    scheduleClass: null,
    photoPath: '',
    points: 0,
    certificates: {
      done: [],
      inProgress: [],
      notStarted: []
    }
  };

  constructor(private userDataService: UserDataService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData();
  }

  changeSection(section: "page-1" | "page-2" | "page-3") {
    this.currentPage = section
    const currentPageIndex = +section.split("-")[1] - 1;
    this.sectionsData.map((item, index) => {
      index === currentPageIndex ? item.isSelected = true : item.isSelected = false
    })
  }

  getStudentData() {
    this.studentService.getStudent("").subscribe((data) => {
      console.log(data);
    });
  }

  changeOption(op: number, type: "schools" | "schooling" | "schedule-class") {
    const father = document.getElementsByClassName(type)[0];
    const children = father.querySelectorAll("span");
    children.forEach((element, index) => {
      element.classList.toggle("selected", index === op)
    });

    switch (type) {
      case "schools":
        this.newStudentInfo.school = op
        break;
      case "schooling":
        this.newStudentInfo.schooling = op
        break;
      case "schedule-class":
        this.newStudentInfo.scheduleClass = op
        break;
    }
  }

  createStudent() {
    if (validateIfNonNullOrUndefined({
      data: this.newStudentInfo,
      keys: ["name", "school", "schooling", "scheduleClass", ]
    }) === false) {
      console.log("DATA IS UNAVAILABLE");
      return;
    }

    this.studentService.createStudent(this.newStudentInfo).subscribe((data) => {
      console.log(data);
    });
  }
}
