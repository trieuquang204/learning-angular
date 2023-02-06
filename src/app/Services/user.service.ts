export class UserService {
  users = [
    {name: 'name1', status: 'active'},
    {name: 'name2', status: 'intive'},
    {name: 'name3', status: 'active'},
  ]

  addNewUser(name: string, status: string) {
    this.users.push({name: name, status: status});
  }
}
