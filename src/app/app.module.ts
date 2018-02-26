import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './JokeList/JokeList.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeProjectionComponent } from './joke-projection/joke-projection.component';
import { CardHoverDirective } from './directives/cardHover.directive';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    JokeProjectionComponent,
    CardHoverDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
