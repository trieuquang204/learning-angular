import { Component, OnInit} from '@angular/core';

import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit  {
  title = "Angular";

  constructor(private userService : UserService) {
    console.log('constructor')
  }

  user: { name: string, job: string, gender: string, country: string,  age: number };

  ngOnInit() {
    this.userService.onShowDetailClicked.subscribe((data: { name: string, job: string, gender: string, country: string,  age: number }) => {
      this.user = data;
    })
  }
}
