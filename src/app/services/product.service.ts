import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList = new BehaviorSubject([
    {
      id: 1,
      productname: "OnePlus Nord 3 5G (Misty Green, 8GB RAM, 128GB Storage)",
      productprice: "₹33,999",
      productInfo: 'productinfr'
    },
    {
      id: 2,
      productname: "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
      productprice: "₹33,999",
      productInfo: 'productinfr'
    },
    {
      id: 3,
      productname: "Nokia C12 Android 12 (Go Edition) Smartphone, All-Day Battery, 4GB RAM (2GB RAM + 2GB Virtual RAM) +64GB Capacity | Light Mint",
      productprice: "₹33,999",
      productInfo: 'productinfr'
    },
    {
      id: 4,
      productname: "realme narzo 60 5G (Mars Orange,8GB+128GB) 90Hz Super AMOLED Display | Ultra Premium Vegan Leather Design | with 33W",
      productprice: "₹33,999",
      productInfo: 'productinfr'
    },
    {
      id: 5,
      productname: "iQOO Z7s 5G by vivo (Norway Blue, 8GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G 6nm Processor | 64 MP OIS",
      productprice: "₹33,999",
      productInfo: 'productinfr'
    },
  ]);
  constructor() { }

  get list() {
    return this.productList.asObservable();
  }

  addProductList(product: any) {
    let products = this.productList.getValue();
    products.push(product);
    this.productList.next(products);
  }
}
