import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

export class JokeModel {
  constructor (public setup: string = '',
               public punchline: String = '') {
  }
}

@Component({
  selector: 'app-joke-model-driven-form',
  templateUrl: './joke-model-driven-form.component.html',
  styleUrls: ['./joke-model-driven-form.component.css']
})
export class JokeModelDrivenFormComponent implements OnInit {

  joke: JokeModel;

  jokeForm: FormGroup;
  setup: FormControl;
  punchline: FormControl;

  @Output() jokeCreated = new EventEmitter<JokeModel>();

  constructor() { }

  ngOnInit() {
    this.joke = new JokeModel('Setup onInit', 'Punchline onInit');
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.jokeForm = new FormGroup({
      setup: this.setup,
      punchline: this.punchline
    });
  }

  createFormControls() {
    this.setup = new FormControl(this.joke.setup, Validators.required);
    this.punchline = new FormControl(this.joke.punchline, Validators.required);
  }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new JokeModel(setup, punchline));
  }
}

