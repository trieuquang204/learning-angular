import { Component, OnInit } from '@angular/core';

import { UserService } from './Services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  inputText : string = 'User service';

  constructor(private userService : UserService) {

  }

  users: {name: string, status: string}[] = []


  ngOnInit() {
     this.users = this.userService.users;
  }
}
