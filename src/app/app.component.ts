import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContainerComponent } from './Container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  inputText : string = 'initialization app';

  onSubmit(inputElm : HTMLInputElement) {
    this.inputText = inputElm.value;
  }


}
