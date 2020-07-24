import { Directive, AfterViewInit, ElementRef } from '@angular/core';
import * as Stickyfill from '../polyfills/stickyfill';

@Directive({
  selector: '[appSticky]',
})
export class StickyDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  public ngAfterViewInit(): void {
    Stickyfill.addOne(this.elementRef.nativeElement);
  }
}
