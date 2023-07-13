import { Component } from '@angular/core';

@Component({
  selector: 'app-role-of-chefs',
  templateUrl: './role-of-chefs.component.html',
  styleUrls: ['./role-of-chefs.component.css']
})
export class RoleOfChefsComponent {
  chefs = {
    img: '../assets/images/fashionable.jpg',
    h5: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    icon: '<i class="fa-solid fa-quote-right"></i>',
    img2: '../assets/images/happy-young-cook-uniform-holding-salad.jpg',
    img3: '../assets/images/pexels-photo-1036623.jpeg',
    img4: '../assets/images/pexels-photo-1684320.jpeg',
  }
}
