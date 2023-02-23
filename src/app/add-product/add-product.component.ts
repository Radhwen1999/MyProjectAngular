import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/product";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  Product!:Product
  constructor() { }
  addProduct(Product:Product){
  }
  ngOnInit(): void {
    this.Product=new Product();
  }

}
