import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class UserService {

  users = [
    {name: 'name1', job: "Teacher", gender: "Male", country: "US",  age: 34},
    {name: 'name2', job: "Doctor", gender: "Female", country: "Germany",  age: 30},
    {name: 'name1', job: "Design", gender: "Male", country: "India",  age: 27},
  ]

  onShowDetailClicked = new EventEmitter<{ name: string, job: string, gender: string, country: string,  age: number }>();

  showUserDetails(user: { name: string, job: string, gender: string, country: string,  age: number } ) {
    this.onShowDetailClicked.emit(user)
  }

}
