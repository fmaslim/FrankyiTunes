import { Component, OnInit } from '@angular/core';
import { JokeComponent, Joke } from '../joke/joke.component';

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

  addJoke(joke) {
    this.jokes.unshift(joke);
  }
}
