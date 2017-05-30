
import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    templateUrl:'product-list.component.html',
    styleUrls : ['product-list.component.css'],
    moduleId : module.id
})
export class ProductListComponent implements OnInit
{
 
    pageTitle: String = "Product List";
    imageWidth : number =50;
    imageMargin : number =2;
    showImage : boolean =false;
    listFilter : string;
    products: IProduct[];
    errorMessage : string;

  constructor(private _productService : ProductService){

   }
    toggleImage() : void{
        this.showImage = !this.showImage;
    }
     ngOnInit(): void {
         this._productService.getProducts().subscribe(products =>this.products = products,
         error => this.errorMessage = <any>error,
         () => this.onDataComplete());
    }
    notify(message : string): void {
        this.pageTitle = "Product list :" + message;
    }

    onDataComplete(){
        console.log("data request is complete");
    }
}