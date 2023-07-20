import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  productData = {
    id: Math.floor(Math.random() * 5 + 6),
    productname: '',
    productprice: '',
    productInfo: '',
    product_img_url: '',
  };

  constructor(private productService: ProductService,
    private router: Router) {

  }

  ngOnInit() {
  }

  submit(form: NgForm) {
    // console.log('test', form, this.productData);
    if (form.valid) {
      this.productService.addProductList(this.productData);
      // form.reset();
      this.router.navigate(['product/list']);
    } else {
      alert('Please fill required fields');
    }
  }


}
