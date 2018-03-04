import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German'
  ];

  myForm: FormGroup;
  name: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  test: string;

  constructor() { }

  ngOnInit() {

    // Instead of doing it this way, create the controls separately in a function

    // this.myForm = new FormGroup({
    //   name: new FormGroup({
    //     firstName: new FormControl('', Validators.required),
    //     lastName: new FormControl('', Validators.required)
    //   }),
    //   email: new FormControl('john.doe@test.com', Validators.required),
    //   password: new FormControl('1234567890', Validators.required),
    //   language: new FormControl('English', Validators.required)
    // });

    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.language = new FormControl('', Validators.required);

    this.name = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.email,
      language: this.language
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.test = 'Form is valid and has been submitted';
      this.myForm.reset();
    } else {
      this.test = 'I don\'t know what you\'re trying to do';
    }
  }
}
