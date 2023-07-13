import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
footer ={
  text: "Sample text. Click to select the Text Element.",
  link: "Website Design",
  para: "Website Builder",
  para1: "created with"
}
}
