import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';

@Component({
    templateUrl : 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
   
    pageTitle: string = 'Product Detail';
    product : IProduct;
    
    constructor(private _route : ActivatedRoute, private _router : Router, private _productService : ProductService){

    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `:  ${id}`;

        let dataSource = this._productService.getProducts().subscribe(
            products => this.product = products.find(x=>x.productId==id)
        )
        
    }
    
    onBack():void{
        this._router.navigate(['/products']);
    }
}
