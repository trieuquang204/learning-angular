import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit  {
  title = "Angular";

  constructor(private route: Router, private activatedRoute : ActivatedRoute) {
    console.log('constructor')
  }


  ngOnInit() {

  }

  navigateToHome() {
    // this.route.navigate([''])
    // c2:
    this.route.navigateByUrl('')


  }


}
