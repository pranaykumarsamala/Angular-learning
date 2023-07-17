import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  bannerData = {
    heading: "About Our",
    span: "Company",
    headingtag: "COLLABORATIVELY BUILD BACKWARD-COMPATIBLE RELATIONSHIPS WHEREAS TACTICAL PARADIGMS.",
    para: "Take your baking to the next level in 30 days with James Beard Award winner Joanne Chang. During her session, Joanne will help you transform into the baker of your dreams.",
    imagesrc: '../assets/images/pexels---7810767.jpg',
    btn: "READ More"
  };

  design: { p?: string } = {};

  constructor() {

  }

  ngOnChanges() {
    // console.log('ngOnchanges');
  }

  ngOnInit() {
    // console.log('ngOnInt');
    setTimeout(() => {
      this.design.p = 'Respond to events in the lifecycle of a component or directive by implementing one or more of the lifecycle hook interfaces in the Angular core library. The hooks give you the opportunity to act on a component or directive instance at the appropriate moment, as Angular creates, updates, or destroys that instance.';
    }, 2000);
  }

  ngDoCheck() {
    // console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy');
  }
}
