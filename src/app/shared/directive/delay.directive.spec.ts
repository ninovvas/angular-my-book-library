import { TemplateRef, ViewContainerRef } from '@angular/core';
import { DelayDirective } from './delay.directive';

describe('DelayDirective', () => {
  it('should create an instance', () => {
    let templateRef!: TemplateRef<any> ;
    let viewContainerRef!: ViewContainerRef;
    const directive = new DelayDirective(templateRef, viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
