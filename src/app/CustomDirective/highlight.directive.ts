import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit  {

  constructor(
    private element: ElementRef, private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red')
    this.renderer.addClass(this.element.nativeElement, 'tenClass')
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is title test')
  }
}
