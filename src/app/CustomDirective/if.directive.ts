import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  // 1, What to add or remove
  // 2, From where to add or remove
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }


  // @Input('appIf') set displayView(condition: boolean) {
  //   if(condition) {
  //     this.viewContainer.createEmbeddedView(this.template)
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

  // C2: Ta có thể dùng selector name như tên thuộc tính thay vì chỉ định một alias(bí danh) cho tên thuộc tính đó
  @Input() set appIf(condition: boolean) {
    if(condition) {
      this.viewContainer.createEmbeddedView(this.template)
    } else {
      this.viewContainer.clear();
    }
  }

}
