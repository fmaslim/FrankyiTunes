import { Component, OnInit } from '@angular/core';
import { JokeModel } from '../joke-model-driven-form/joke-model-driven-form.component';

@Component({
  selector: 'app-joke-list-model-driven',
  templateUrl: './joke-list-model-driven.component.html',
  styleUrls: ['./joke-list-model-driven.component.css']
})
export class JokeListModelDrivenComponent implements OnInit {

  jokes: JokeModel[];

  constructor() {
    this.jokes = new Array<JokeModel>();
  }

  ngOnInit() {
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }
}
