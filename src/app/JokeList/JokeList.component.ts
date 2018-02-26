import { Component, OnInit } from '@angular/core';
import { JokeComponent, Joke } from '../joke/joke.component';
import { CardHoverDirective } from '../directives/cardHover.directive';

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

  deleteJoke(joke) {
    // alert(joke.setup + '. ' + joke.punchline);

    // 1. find the index of the element to remove
    // 2. remove it with splice
    // for (let index = 0; index <= this.jokes.length - 1; index++) {
    //   this.jokes.
    // }

    const index = this.jokes.findIndex(item => item.setup === joke.setup && item.punchline === joke.punchline);
    if (index >= 0) {
      this.jokes.splice(index, 1);
    }
  }
}
