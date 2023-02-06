import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { DemoComponent } from './Demo/demo.component';
import { CustomListComponent } from './Custom-list/custom-list.component';

import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { HostBindingDirective } from './CustomDirective/host-binding.directive';
import { ClassCustomDirective } from './CustomDirective/class-custom.directive';
import { IfDirective } from './CustomDirective/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    DemoComponent,
    CustomListComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    HostBindingDirective,
    ClassCustomDirective,
    IfDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
