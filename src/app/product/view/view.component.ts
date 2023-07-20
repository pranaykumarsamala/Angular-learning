import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  productId: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((res: { id: Number } | any) => {
      if (res) {
        this.productId = res.id;
      }
    });
  }

  ngOnInit() {

  }
}
