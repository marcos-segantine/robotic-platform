import { Component } from '@angular/core';

import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent {

}
