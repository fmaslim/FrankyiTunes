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
import { ProvidersComponent } from './dependency injection/providers/providers.component';
import { ProviderChildComponent } from './dependency injection/provider-child/provider-child.component';

// For Service providers, deciding where to configure the provider and understanding
// the difference is key in understanding how to architect an Angular application

// If we want an instance of a dependency to be shared globally, and share state across the application
// configure it on NgModule

// If we want a separate instance of a dependency to be shared across each instance of a component
// and its children, we configure it on the components providers property

// If we want a separate instance of a dependency to be shared across each instance of a component
// and only its view children, we configure it on the components viewProviders property

import { SimpleService } from './dependency injection/providers/providers.component';

import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './http API/http/http.component';
import { HttpPromiseComponent } from './http API/http-promise/http-promise.component';
import { HttpObservableComponent } from './http API/http-observable/http-observable.component';
import { HttpJsonpComponent } from './http API/http-jsonp/http-jsonp.component';
import { Jsonp, JsonpModule, Response } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { SearchComponent } from './routes/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'find', redirectTo: 'search' },
  { path: 'search', component: SearchComponent },
  { path: '**', component: HomeComponent }
];

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
    JokeListModelDrivenComponent,
    ProvidersComponent,
    ProviderChildComponent,
    HttpComponent,
    HttpPromiseComponent,
    HttpObservableComponent,
    HttpJsonpComponent,
    HomeComponent,
    SearchComponent
],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, JsonpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
