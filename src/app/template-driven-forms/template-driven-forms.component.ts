import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  name: string = 'test';
  email: string = 'test@gmail.com';
  password: string | undefined;
  confirmpassword: string | undefined;

  registationData() {
    console.log(this.name, this.email, this.password, this.confirmpassword)
  }
}
