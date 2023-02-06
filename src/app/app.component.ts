import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title : string = 'Userdetail';

  constructor() {

  }

  // myObservable = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next("1")
  //   }, 1000);

  //   setTimeout(() => {
  //     observer.next("2")
  //   }, 2000);

  //   // setTimeout(() => {
  //   //   observer.error(new Error('Something wrong'))
  //   // }, 2000);

  //   setTimeout(() => {
  //     observer.next("3")
  //   }, 3000);

  //   setTimeout(() => {
  //     observer.complete()
  //   }, 4000);

  //   // console.log('start')
  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  // });

  array1 = [1, 2, 6, 7, 8];
  array2 = ['A', 'B', 'C'];

  myObservable = from(this.array1)

  transform = this.myObservable.pipe(map((val) => {
    return val * 5
  }))


  ngOnInit() {
    this.transform.subscribe((val) => {
      console.log('val', val)
    }, (error ) => {
      alert(error.message)
    }, () => {
      alert('complete')
    })
  }
}
