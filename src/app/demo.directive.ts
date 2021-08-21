import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'yellow';
  }

}
