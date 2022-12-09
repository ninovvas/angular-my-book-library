import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bookDelay]'
})
export class DelayDirective implements OnInit {

  @Input() bookDelay?;

  constructor( private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, this.bookDelay);
  }

}
