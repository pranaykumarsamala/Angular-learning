import { Component } from '@angular/core';

@Component({
  selector: 'app-product-viewpage',
  templateUrl: './product-viewpage.component.html',
  styleUrls: ['./product-viewpage.component.css']
})
export class ProductViewpageComponent {
productdata  = {
  imagesrc: '../assets/images/oneplus.jpg',
  productname:"OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)",
  price:"₹33,999",
  size:"Size: 8GB RAM, 128GB Storage",
  about:"About this item",
  para1:"Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera with Sony IMX355 (FOV: 112 degree) and 2MP Macro lens f/2.4 and a FOV 89°; 16MP Front (Selfie) Camera with EIS supported",
  para2:"Camera Features: Photo, Video, Night, Portrait, PANO, TIME-LAPSE, and Dual-view video Display: 6.74 Inches; 120 Hz AMOLED FHD+ Display with Corning Gorilla Glass Victus; Resolution: 2772 X 1240 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming",
  color: "Red",
  color2: "White",
  colortype:"Colors Type",
  addtocart:"add to cart"
}
}
