import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];

  constructor(private _dataService:DataService, private router:Router) { }

  ngOnInit() {
    this.products = this._dataService.getProducts();
  }

  onClickDelete(pro:Product):void{
    let index = this.findItem(pro.id);
    if(index != -1) this.products.splice(index,1);
  }

  onClickEdit(pro:Product):void{
    this.router.navigate(['/productlist',pro.id]);
  }

  findItem(id:number):number{
    for(var i = 0; i < this.products.length; ++i){
      if(this.products[i].id === id) return i;
    }
    return -1;
  }

}
