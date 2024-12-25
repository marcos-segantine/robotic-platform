import { Component } from '@angular/core';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { UserDataService } from '../../../../core/services/user-data.service';
import { StudentService } from '../../../../core/services/student.service';

import { StudentModel } from "../../../../core/models/student.model";

import { School } from '../../../../core/enum/school.enum';
import { Schooling } from '../../../../core/enum/schooling.enum';
import { ScheduleClass } from '../../../../core/enum/scheduleClass.enum';

import { MenuComponent } from '../../../../shared/components/menu/menu.component';

import { validateIfNonNullOrUndefined } from '../../../../shared/validations/validateIfNonNull.validate';

import { createUID } from '../../../../shared/utils/createUID.util';

@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [InputComponent, ButtonComponent, MenuComponent],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss'
})
export class StudentInfoComponent {
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
    id: "",
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
    },
    statistics: [],
    userType: "student",
  };
  studentsNameToSearch = "";
  studentsSearched: Array<StudentModel> | null = null;
  Schooling = Schooling;
  School = School;
  ScheduleClass = ScheduleClass;

  constructor(private studentService: StudentService) { }

  changeSection(section: "page-1" | "page-2" | "page-3") {
    this.currentPage = section
    const currentPageIndex = +section.split("-")[1] - 1;
    this.sectionsData.map((item, index) => {
      index === currentPageIndex ? item.isSelected = true : item.isSelected = false
    })
  }

  getStudentData() {
    this.studentService.getStudentsByName(this.studentsNameToSearch).subscribe((data) => {
      if (data === null) this.studentsSearched = null;
      else this.studentsSearched = data;
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
      keys: ["name", "school", "schooling", "scheduleClass",]
    }) === false) {
      console.log("DATA IS UNAVAILABLE");
      return;
    }

    this.newStudentInfo.id = createUID();

    this.studentService.createStudent(this.newStudentInfo).subscribe((data) => {
      console.log(data);
    });
  }
}
