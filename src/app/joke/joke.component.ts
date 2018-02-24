import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class Joke {
  setup: string;
  punchline: string;
  hide: boolean;

  constructor (setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = false;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  // By pre-prending a property with @Input, this makes it bindable to
  // the component user, so that it can pass in a value to this component to be used
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteJoke(setup: string, punchline: string) {
    this.jokeDeleted.emit(new Joke(setup, punchline));
  }
}
