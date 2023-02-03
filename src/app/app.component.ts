import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContainerComponent } from './Container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputText : string = 'initialization app';

  display: boolean = false

  displayNotice() {
    this.display = !this.display
  }

}
