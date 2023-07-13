import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listOfItems = {
    h5: 'Bake 8 bakery-ready recipes',
    para: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imagesrc: '../assets/images/lightbulb.svg',
    box2: 'Flexible 30-day curriculum',
    para2: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imagesrc2: '../assets/images/flag.svg',
    box3: 'Feedback & discussions',
    para3: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imagesrc3: '../assets/images/telegram.svg',
    box4: 'All levels of production',
    para4: 'Sample text. Click to select the text box. Click again or double click to start editing the text.',
    imagesrc4: '../assets/images/diamond.svg',
  }
}
