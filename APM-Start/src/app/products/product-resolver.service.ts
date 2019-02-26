import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Product } from './product';
import { ProductService } from './product.service';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
    constructor(private productService: ProductService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
        const id = route.paramMap.get('id');
        if (isNaN(+id)) {
            const message = 'Product id was not a number: ${id}';
            console.error(message);
            return; // ???
        }
        return this.productService.getProduct(+id);
    }
}
