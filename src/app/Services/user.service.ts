import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}

  users = [
    {name: 'name1', status: 'active'},
    {name: 'name2', status: 'intive'},
    {name: 'name3', status: 'active'},
  ]

  addNewUser(name: string, status: string) {
    this.users.push({name: name, status: status});
    this.logger.LogMessage(name, status);
  }
}
