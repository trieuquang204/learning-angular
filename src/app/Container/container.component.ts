import { Component, OnInit } from "@angular/core";

import { UserService } from "../Services/user.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  // providers: [UserService]
  // Khai báo ở đây sẽ bị overright UserService trong app => user k add đc
})
export class ContainerComponent implements OnInit  {
  username: string = '';
  status: string = 'active';

  public testttt : string = '';

  constructor(private userService : UserService) {

  }

  ngOnInit() {

  }

  addUser() {
    this.userService.addNewUser(this.username, this.status);
    // console.log(this.userService.users)
  }

}
