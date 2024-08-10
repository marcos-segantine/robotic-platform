import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";

@Component({
  selector: 'app-professor-about',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './professor-about.component.html',
  styleUrl: './professor-about.component.scss'
})
export class ProfessorAboutComponent {

}
