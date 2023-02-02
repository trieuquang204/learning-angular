import { Component } from "@angular/core";

@Component({
  selector: 'app-container',
  // templateUrl: './container.component.html',
  template: `
    <div>
      <h1>This is template property html</h1>
      <p class="para">Some text</p>
    </div>
  `,
  styles: ["h1{color: red; background: blue; text-align: center }", ".para{color: blue; background: #000; margin-top: 20px }"]
  // styleUrls: ['./container.component.css']
})
export class ContainerComponent {

}
