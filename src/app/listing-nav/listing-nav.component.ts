import { Component } from '@angular/core';

@Component({
  selector: 'app-listing-nav',
  templateUrl: './listing-nav.component.html',
  styleUrls: ['./listing-nav.component.css']
})
export class ListingNavComponent {
  list ={
    listsubnav1: "Filter 1",
    listsubnav2: "Sub1",
    listsubnav3: "Sub2",
    listsubnav4: "Filter 2",
    listsubnav5: "Filter 3",
    listsubnav6: "Filter 4",
  }
}
