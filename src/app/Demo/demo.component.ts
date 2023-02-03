import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit  {
  @Input() value : string = 'initialization demo';

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('paraElm', this.paraElm)
  }

  ngAfterContentInit() {
    // console.log('paraElm after', this.paraElm.nativeElement.textContent)
    this.paraElm.nativeElement.textContent = "new value"
  }

  @ContentChild('paragraph') paraElm : ElementRef;


}
