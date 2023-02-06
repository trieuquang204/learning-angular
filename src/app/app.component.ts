import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContainerComponent } from './Container/container.component';

import { EnrollService } from './Services/enroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollService]
})
export class AppComponent {
  inputText : string = 'initialization app';

  constructor(private enrollService : EnrollService) {

  }


}
