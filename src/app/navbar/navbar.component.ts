import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
nav ={
  home: "Home",
  about: "About",
  land: "Landing",
  team: "Team",
  connect:"Connect",
  list:"List",
}
}
