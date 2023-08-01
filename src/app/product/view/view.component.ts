import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  id: any;
  product: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) {
    this.route.params.subscribe((res: { id: Number } | any) => {
      if (res) {
        this.id = res.id;
        this.product = this.productService.getProductById(this.id);
        console.log(this.product);
      }
    });
  }

  ngOnInit() {

  }
}
