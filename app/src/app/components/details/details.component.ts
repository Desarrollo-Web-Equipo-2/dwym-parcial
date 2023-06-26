import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../interfaces/product";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {

  product?: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductService) {
    this.route.params.subscribe({
      next: (params) => {
      this.productsService.getProduct(params['id']).subscribe({
        next: (product) => {
          this.product = product;
        }
      })
      }
    })

  }

  ngOnInit() {

  }

}
