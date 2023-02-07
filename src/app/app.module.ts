import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

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
import { ErrorComponent } from './error/error.component';

const appRoute: Routes = [
  {path: '', component: ContainerComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ContainerComponent},
  {path: 'about', component: DemoComponent},
  {path: 'contact', component: CustomListComponent},
  // This route luôn đứng cuối
  {path: '**', component: ErrorComponent},
]

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
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
