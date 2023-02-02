import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { DemoComponent } from './Demo/demo.component';
import { CustomListComponent } from './Custom-list/custom-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    DemoComponent,
    CustomListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
