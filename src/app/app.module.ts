import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './JokeList/JokeList.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeProjectionComponent } from './joke-projection/joke-projection.component';
import { CardHoverDirective } from './directives/cardHover.directive';
import { RolloverDirective } from './directives/rollover.directive';
import { DefaultPipe } from './pipes/image-default.pipe';
import { CleanPipe } from './pipes/clean.pipe';
import { ModelDrivenFormComponent } from './forms/model-driven-form/model-driven-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveModelFormComponent } from './forms/reactive-model-form/reactive-model-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { JokeModelDrivenFormComponent } from './forms/joke-model-driven-form/joke-model-driven-form.component';
import { JokeListModelDrivenComponent } from './forms/joke-list-model-driven/joke-list-model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    JokeProjectionComponent,
    CardHoverDirective,
    RolloverDirective,
    DefaultPipe,
    CleanPipe,
    ModelDrivenFormComponent,
    ReactiveModelFormComponent,
    TemplateDrivenFormComponent,
    JokeModelDrivenFormComponent,
    JokeListModelDrivenComponent
],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
