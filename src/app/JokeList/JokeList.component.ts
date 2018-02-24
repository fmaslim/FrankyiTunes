import { Component, OnInit } from '@angular/core';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './JokeList.component.html',
  styleUrls: ['./JokeList.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Object[];

  constructor() {

    this.jokes = [
      {
        setup: 'What did the cheese say when it looked in the mirror?',
        punchline: 'Hello-Me (Halloumi)',
        hide: false
      },
      {
        setup: 'What kind of cheese do you use to disguise a small horse?',
        punchline: 'Mask-a-pony (Mascarpone)',
        hide: true
      },
      {
        setup: 'A kid threw a lump of cheddar at me',
        punchline: 'I thought that is not very mature',
        hide: false
      },
    ];

  }

  ngOnInit() {
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }
}
