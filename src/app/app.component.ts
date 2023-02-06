import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title : string = 'Userdetail';

  constructor() {

  }

  myObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next("1")
    }, 1000);

    setTimeout(() => {
      observer.next("2")
    }, 2000);

    // setTimeout(() => {
    //   observer.error(new Error('Something wrong'))
    // }, 2000);

    setTimeout(() => {
      observer.next("3")
    }, 3000);

    setTimeout(() => {
      observer.complete()
    }, 4000);

    // console.log('start')
    // observer.next("1")
    // observer.next("2")
    // observer.next("3")
  });



  ngOnInit() {
    this.myObservable.subscribe((val) => {
      console.log('val', val)
    }, (error ) => {
      alert(error.message)
    }, () => {
      alert('complete')
    })
  }
}
