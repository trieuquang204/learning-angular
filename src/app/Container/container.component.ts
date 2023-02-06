import { Component, OnInit } from "@angular/core";

import { EnrollService } from "../Services/enroll.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [EnrollService]
})
export class ContainerComponent implements OnInit  {
  title = "Java script";

  constructor(private enrollService : EnrollService) {

  }

  ngOnInit(): void {

  }

  // onEnroll() {
  //   alert('Thanks for ' + this.title + ' course')
  // }

  onEnroll() {
    // const enrollService = new EnrollService();
    this.enrollService.onEnrollClicked(this.title);
  }

}
