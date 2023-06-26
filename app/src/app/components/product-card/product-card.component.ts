import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../interfaces/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor() { }

}