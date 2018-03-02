import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

// The selector is very similar to that of a Component. The striking difference is the [] sign

// To understand why this is, first understand that the selector attribute uses CSS matching rules
// to match a component/directive to a HTML element.

// In CSS, to match to a specific element, we would just type in the name of the element
// E.g.: input {...} or p {...}

// This is why previously when we defined the selector in the @Component directive, we just wrote
// the name of the element, which matches onto an element of the same name.

// To associate a directive to an element with a certain attribute, wrap the name of the attribute with []

@Directive({
  selector: '[appRollover]'
})
export class RolloverDirective {
  // See explanation in the HostListener method below
  // To be able to use this in the host with the selector name, put an alias as the param
  @Input('appRollover') config: Object = {
    querySelector: '.card-text',
    initial: 'https://unsplash.it/200/300?image=201',
    over: 'https://unsplash.it/200/300?image=202'
  };

  // This property is used for @HostBinding
  // When the directive gets created, Angular can inject an instance of something called ElementRef into the constructor.
  // ElementRef gives the directive a direct access to the DOM element upon which it is attached.
  // Renderer is a platform-independent way of setting properties on elements.
  constructor(private elm: ElementRef, private renderer: Renderer) {
    // this.elm.nativeElement.style.backgroundColor = 'blue';
    // renderer.setElementStyle(elm.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseover') onmouseover() {
    // Even though this works, it's not very re-useable
    // It needs to be configurable so that it can be used in other situations
    // One way to do that is to use the query selector for the element to hide/show
    // By moving it to a property in this class
    const part = this.elm.nativeElement.querySelector(this.config['querySelector']);
    this.renderer.setElementAttribute(part, 'src', this.config['over']);
  }

  @HostListener('mouseout') onmouseout() {
    const part = this.elm.nativeElement.querySelector('querySelector');
    this.renderer.setElementAttribute(part, 'src', this.config['initial']);
  }


}
