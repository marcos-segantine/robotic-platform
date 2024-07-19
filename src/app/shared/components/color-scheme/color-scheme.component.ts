import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-color-scheme',
  standalone: true,
  imports: [],
  templateUrl: './color-scheme.component.html',
  styleUrl: './color-scheme.component.scss'
})
export class ColorSchemeComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  mode: "dark" | "light" = "dark"

  updateColorScheme() {
    if (document.body.className == "dark") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")

      this.mode = 'light';
    }
    else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
      
      this.mode = 'dark';
    }
  }
}
