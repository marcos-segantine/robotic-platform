import { Component, OnDestroy, OnInit } from '@angular/core';

import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';

import { ButtonType } from '../../../features/auth/enum/button-type-enum';

import { ArrowComponentIcon } from '../../../../../public/assets/arrow/arrow.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [InputComponent, ButtonComponent, ArrowComponentIcon],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent implements OnInit, OnDestroy {
  private observer: MutationObserver = {} as MutationObserver;
  buttonType = ButtonType;
  theme = ""

  ngOnInit(): void {
    // set the icon color
    const body = document.getElementsByTagName("body")[0];
    this.theme = body.getAttribute("class") as string;
    

    const fatherElements = document
      .getElementById("container")
      ?.getElementsByClassName("content");

    if (!fatherElements) {
      console.log("SOME ERROR OCCURRED!");
      return;
    }

    for (let i = 0; i < fatherElements.length; i++) {
      const responseContent = fatherElements[i].getElementsByClassName("response")[0] as HTMLElement;
      responseContent.style.height = "0px";
    }
  
    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          this.theme = body.getAttribute("class") as string;
        }
      });
    });

    this.observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  heandleClick(index: number) {
    const fatherElements = document
      .getElementById("container")
      ?.getElementsByClassName("content");

    if (!fatherElements) {
      console.log("SOME ERROR OCCURRED!");
      return;
    }

    const father = fatherElements[index] as HTMLElement;

    // rotate the arrow
    const questionContainer = father.getElementsByClassName("question")[0];
    const arrowContainer = questionContainer.getElementsByTagName("div")[0];
    arrowContainer.classList.toggle("rotate-arrow");
    
    // showing response
    const responseContent = father.getElementsByClassName("response")[0] as HTMLElement;

    const isExpanded = responseContent.style.height !== "0px";

    if (isExpanded) {
      responseContent.style.height = "0px";
    } else {
      const contentHeight = responseContent.scrollHeight;
      responseContent.style.height = `${contentHeight}px`;
    }
  }
}