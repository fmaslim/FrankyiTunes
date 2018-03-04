import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

export class Signup {
  constructor (public firstName: string = '',
               public lastName: string = '',
               public email: string = '',
               public password: string = '',
               public language: string = '') {

  }
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  languages: string[] = [
    'English',
    'French',
    'German'
  ];

  // Two-way data binding between the template and the variable in the component
  // The [(email)] syntax is a combination of the syntax for input property binding [] and output event binding ()
  email: string;
  model: Signup;

  @ViewChild('f') form: any;

  constructor() {
    this.form = new FormControl();
  }

  ngOnInit() {
  }

}
