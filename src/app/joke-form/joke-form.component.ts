import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke/joke.component';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  // To create a custom output event in our component, do 2 things:
  // 1. Create an EventEmitter property in JokeFormComponent
  // 2. Decorate/Annotate that property with @Output
  @Output() jokeCreated = new EventEmitter<Joke>();


  constructor() { }

  ngOnInit() {
  }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
