import { Component } from '@angular/core';
import { RolloverDirective } from './directives/rollover.directive';
import { CardHoverDirective } from './directives/cardHover.directive';
import { DefaultPipe } from './pipes/image-default.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // imageUrl = 'https://stocksnap.io/photo/QZODBTHHZQ';
  imageUrl = '';
  defaultCleanPipeText = 'This damn monkey sucks balls. It is stupid as hell, bitch';
}
