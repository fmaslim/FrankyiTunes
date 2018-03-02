import { Component } from '@angular/core';
import { RolloverDirective } from './directives/rollover.directive';
import { CardHoverDirective } from './directives/cardHover.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
