import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})

export class ProductCreationComponent implements OnInit {
  products:Product[];
  id:number ;

  constructor(private _dataService: DataService) { 
  }

  ngOnInit() {
    this.products = this._dataService.getProducts();
    if(this.products.length === 0) this.id = 0;
    else{this.id = this.products[this.products.length - 1].id + 1;}
    console.log(this.id);
  }

  onSubmit(n,p){
    var product:Product = {
      name:n,
      price:p,
      id:this.id
    }
    this.id += 1;
    this._dataService.addProduct(product);
    console.log('done');
  }

}
