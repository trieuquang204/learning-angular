import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContainerComponent } from './Container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputText : string = 'initialization app';

  occupation: string = 'test2đ';

}
