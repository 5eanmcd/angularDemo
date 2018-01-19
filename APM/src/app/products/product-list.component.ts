import { Component } from '@angular/core';
import { ProductService } from "./products.service";
// import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = "Product List"
    imageWidth: number = 50
    imageMargin: number = 3;
    showImage: boolean = false;
    filter: string = 'cart'
    products: any[] = []
    errorMessage: string = ''

    toggleImage(): void{
        this.showImage = !this.showImage
    }

    constructor(private _productService: ProductService) {
    }

    ngOnInit(): void {
        this._productService.getProducts()
        .subscribe(products => this.products = products,
        error => this.errorMessage = <any>error);
    }
}