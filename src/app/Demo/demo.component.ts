import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit  {
  title = "Angular";

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    // console.log('paraElm', this.paraElm)
  }

  onEnroll() {
    alert('Thanks for ' + this.title + ' course')
  }

}
