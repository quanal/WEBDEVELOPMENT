import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:number; 
  specificProduct:Product;
  products:Product[];
  show:boolean;

  constructor(private _dataService:DataService,private _route:ActivatedRoute) { }

  ngOnInit() {
    this.products = this._dataService.getProducts();
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.findItem(this.id);
    if(this.products.length > 0) this.show = true;
    else this.show = false;
  }

  onSubmit(name,price):void{
    this._dataService.editProduct(this.id,[name,price]);
  }

  findItem(id:number):void{
    for(var i = 0; i < this.products.length; ++i){
      if(this.products[i].id === id) this.specificProduct = this.products[i];
    }
  }
  
}
