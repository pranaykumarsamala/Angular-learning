import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnChanges, OnInit {
  @Input() data: any;
  design = {
    h2: 'Design Perfection',
    para: 'We’re a small creative design studio based in New York, working with adventurous clients and providing Creative Concept, Branding, Graphic Design, Art Direction and Digital Communication services.',
    btn: ' Read More'
  };
  constructor() {

  }
  
  ngOnChanges(change: SimpleChanges) {
    console.log(this.data);
  }

  ngOnInit() {
    console.log(this.data);
  }
}
