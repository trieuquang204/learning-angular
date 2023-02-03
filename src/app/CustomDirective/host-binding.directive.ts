import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // defaultColor: string = 'red';
  // highlightColor: string = 'pink';

  // @Input() defaultColor: string = 'red';
  // @Input() highlightColor: string = 'pink';

  @Input() defaultColor: string = 'red';
  @Input('appHostBinding') highlightColor: string = 'pink';


  ngOnInit() {
    this.background = this.defaultColor;
  }
  // @HostBinding('style.backgroundColor') background: string = 'red';
  @HostBinding('style.backgroundColor') background: string = this.defaultColor;

  @HostListener('mouseenter') mouseenter() {
    // this.background = 'pink';
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.background = 'red';
    this.background = this.defaultColor;
  }

}
