import { Component, OnInit} from '@angular/core';

import { DataService } from '../Services/data.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit  {
  title = "Angular";

  constructor(private dataService: DataService) {
    console.log('constructor')
  }


  ngOnInit() {
    this.dataService.dataEmitter.subscribe((data) => {
      this.inputText = data;
    })
  }

  inputText: string = '';
}
