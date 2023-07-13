import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
bannerData ={
  heading : "About Our",
  span: "Company",
  headingtag: "COLLABORATIVELY BUILD BACKWARD-COMPATIBLE RELATIONSHIPS WHEREAS TACTICAL PARADIGMS.",
  para:"Take your baking to the next level in 30 days with James Beard Award winner Joanne Chang. During her session, Joanne will help you transform into the baker of your dreams.",
  imagesrc : '../assets/images/pexels---7810767.jpg',
  btn: "READ More"
}
}
