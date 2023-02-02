// import {  } from '@angular/compiler';
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContainerComponent } from './Container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'learning-angular';

  @ViewChild('dobInput') dateOfBirth : ElementRef
  @ViewChild('ageInput') age : ElementRef
  @ViewChild(ContainerComponent, {static: true}) containerComp : ContainerComponent;

  calculateAge() {
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear()
    let currentYear = new Date().getFullYear()
    let age = currentYear - birthYear;
    this.age.nativeElement.value = age;
  }
}
