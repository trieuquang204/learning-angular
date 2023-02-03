import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appClassCustom]'
})
export class ClassCustomDirective {

  constructor( private element: ElementRef, private renderer: Renderer2) { }

  @Input('appClassCustom') set display(value: Object) {
    let entries = Object.entries(value)
    for(let entry of entries) {
      if(entry[1]) {
        this.renderer.addClass(this.element.nativeElement, entry[0])
      }
    }
  }

}
