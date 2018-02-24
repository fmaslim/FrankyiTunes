import { Component, OnInit } from '@angular/core';
import { JokeComponent } from '../joke/joke.component';

export class Joke {
  setup: string;
  punchline: string;
  hide: boolean;

  constructor (setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'app-joke-list',
  templateUrl: './JokeList.component.html',
  styleUrls: ['./JokeList.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];

  constructor() {

    this.jokes = [
      new Joke('Joke 1', 'What a day!'),
      new Joke('Joke 2', 'I dont know what Im doing'),
      new Joke('Joke 3', 'Fine!'),
    ];

  }

  ngOnInit() {
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }
}
