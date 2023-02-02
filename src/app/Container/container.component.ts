import { Component, OnInit } from "@angular/core";

@Component({
  // selector: 'app-container',
  // selector: '[app-container]',
  selector: '.app-container',
  templateUrl: './container.component.html',
  // template: `
  //   <div>
  //     <h1>This is template property html</h1>
  //     <p class="para">Some text</p>
  //     <p class="alert alert-warning">quang test boostrap</p>
  //   </div>
  // `,
  // styles: ["h1{color: red; background: blue; text-align: center }", ".para{color: blue; background: #000; margin-top: 20px }"]
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit  {
  constructor() {

  }

  ngOnInit(): void {

  }

  // slogan: string = 'Hiho some text';
  // source: string = "/assets/11.jpg";

  changeValue(eventData: Event) {
    console.log('eventData', (<HTMLInputElement>eventData.target).value)
  }
}
