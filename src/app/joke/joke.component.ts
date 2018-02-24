import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  // By pre-prending a property with @Input, this makes it bindable to
  // the component user, so that it can pass in a value to this component to be used
  @Input() joke: Joke;

  constructor() {
  }

  ngOnInit() {
  }

}
