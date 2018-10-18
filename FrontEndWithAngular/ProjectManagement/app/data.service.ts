import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products:Product[];

  constructor() { 
    this.products = [];
  }

  getProducts():Product[]{
    return this.products;
  }

  addProduct(prod:Product):void{
    this.products.push(prod);
  }

  editProduct(id:number, changes:any[]):void{
    let index = this.findItem(id);
    this.products[index].name = changes[0];
    this.products[index].price = changes[1];
  }

  findItem(id:number):number{
    for(var i = 0; i < this.products.length; ++i){
      if(this.products[i].id === id) return i;
    }
    return -1;
  }
}
