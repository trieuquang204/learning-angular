import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') background: string = 'red';

  @HostListener('mouseenter') mouseenter() {
    this.background = 'pink';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = 'red';
  }

}
