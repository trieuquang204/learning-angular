import { Component, OnInit } from "@angular/core";
import { DataService } from "../Services/data.service";


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit  {


  constructor(private dataService : DataService) {

  }


  ngOnInit() {
    // this.users = this.userService.users;
  }

  enterText: string = '';

  onBtnClick() {
    this.dataService.raiseDataEmitterEvent(this.enterText);
  }



}
