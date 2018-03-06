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
import { HomeComponent, AlwaysAuthGuard, OnlyLoggedInUserGuard } from './routes/home/home.component';
import { AlwaysAuthChildrenGuard, UnsearchedTermGuard } from './routes/home/home.component';
import { SearchComponent } from './routes/search/search.component';
import { ArtistComponent } from './routes/artist/artist.component';
import { ArtistTrackListComponent } from './routes/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './routes/artist-album-list/artist-album-list.component';
import { GoogleComponent } from './routes/google/google.component';
import { YahooComponent } from './routes/yahoo/yahoo.component';
import { MicrosoftComponent } from './routes/microsoft/microsoft.component';
import { UserService } from './routes/home/home.component';

// There are 2 types of routing strategies:
// 1. HashLocationStrategy
// 2. PathLocationStrategy

// 1. HashLocationStrategy is ideal for CLIENT-side routing, because:
// a. it's part of the URl so it can be bookmarked and set to other people
// b. it won't confuse the server side since the hash fragment is never sent to the server
// c. It can be programmatically changed via Javascript

// 2. PathLocationStrategy takes advantage of a relatively new HTML5 API called pushstate
// By using pushstate, we can change the URL and NOT have the browser request the page from the server
// and without needing to use a hash fragment

// Read more on routing strategy in "Angular from theory to practice", page 548

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canDeactivate: [ UnsearchedTermGuard ] },
  { path: 'home/:id', component: HomeComponent },
  { path: 'find', redirectTo: 'search' },
  { path: 'search', component: SearchComponent },
  { path: 'artist', component: ArtistComponent, canActivate: [ OnlyLoggedInUserGuard, AlwaysAuthGuard ] },
  { path: 'artist/:artistId',
    component: ArtistComponent,
    canActivateChild: [AlwaysAuthChildrenGuard],
    children: [
      { path: '', redirectTo: 'tracks', pathMatch: 'full' },
      { path: 'tracks', component: ArtistTrackListComponent },
      { path: 'albums', component: ArtistAlbumListComponent },
      { path: '**', component: ArtistTrackListComponent }
    ] },
  { path: 'google', component: GoogleComponent },
  { path: 'yahoo', component: YahooComponent },
  { path: 'microsoft', component: MicrosoftComponent },
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
    SearchComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    GoogleComponent,
    YahooComponent,
    MicrosoftComponent
],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, JsonpModule,
    // The HashLocationStrategy is used so that people can link to a particular section in an HTML page (anchor tags)
    // And anything past the # sign never gets sent to the server
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [UserService, OnlyLoggedInUserGuard,
    AlwaysAuthGuard, AlwaysAuthChildrenGuard,
    UnsearchedTermGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
