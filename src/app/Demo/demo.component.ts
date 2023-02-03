import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked  {
  @Input() value : string = 'initialization demo';

  constructor() {
    console.log('constructor')
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges call', change)
  }

  ngOnInit() {
    console.log('ng init')
  }

  ngDoCheck() {
    console.log('ngDoCheck call')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

}
