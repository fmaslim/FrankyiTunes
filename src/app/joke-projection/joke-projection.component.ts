import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke/joke.component';

@Component({
  selector: 'app-joke-projection',
  templateUrl: './joke-projection.component.html',
  styleUrls: ['./joke-projection.component.css']
})
export class JokeProjectionComponent implements OnInit {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

  deleteJoke(setup: string, punchline: string) {
    this.jokeDeleted.emit(new Joke(setup, punchline));
  }
}
