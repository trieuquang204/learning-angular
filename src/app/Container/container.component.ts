import { Component, OnInit } from "@angular/core";

import { UserService } from "../Services/user.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit  {


  constructor(private userService : UserService) {

  }

  users: { name: string, job: string, gender: string, country: string,  age: number }[] = [];

  ngOnInit() {
    this.users = this.userService.users;
  }

  showDetails(user: { name: string, job: string, gender: string, country: string,  age: number } ) {
    this.userService.showUserDetails(user)
  }



}
