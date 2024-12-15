import { Component, OnInit } from '@angular/core';

import { InputComponent } from '../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

import { UserDataService } from '../../../../core/services/user-data.service';
import { UserDataModel } from '../../../../core/models/user-data.model';
import { StudentService } from '../../../../core/services/student.service';

import { Student } from "../../../../core/models/student.model";

import { MenuComponent } from '../../../../shared/components/menu/menu.component';

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

  constructor(private userDataService: UserDataService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData();
  }

  changeSection(section: "page-1" | "page-2" | "page-3")
  {
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

  createStudent() {
    const student: Student = {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "John Doe",
      certificates: {
        done: [],
        inProgress: [],
        notStarted: [],
      },
      photoPath: "https://www.google.com",
      points: 0,
      schooling: 0,
      school: 0,
      scheduleClass: 0
    };

    this.studentService.createStudent(student).subscribe((data) => {
      console.log(data);

    });
  }
}
