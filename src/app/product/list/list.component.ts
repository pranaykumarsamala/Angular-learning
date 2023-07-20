import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productList: any[] = [];
  constructor(
    private productService: ProductService
  ) {

  }

  ngOnInit() {
    this.productService.list.subscribe(res => {
      this.productList = res;
    })
  }
}
