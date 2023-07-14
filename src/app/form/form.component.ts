import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form = {
    head: "Apply ",
    now: "now",
    submit: "Submit",
    Message: "Message",
    email: "Email",
    name: "Name"
  }
  submit:boolean = false;
  user = {
    name: '',
    email: '',
    message: ''
  };

  getUser() {
    console.log(this.user);
    this.submit = true;
  }

  reset() {
    this.submit = false;
    this.user = {
      name: '',
      email: '',
      message: ''
    };
  }
}
