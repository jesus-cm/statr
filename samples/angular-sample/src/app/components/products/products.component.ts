import { Component, OnInit } from '@angular/core';
import Statr from '../../../../../../src/Statr';
import { ProductState, PRODUCT_STATE } from '../../state/product.state';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(elem: string) {

    let products: ProductState = Statr.getState(PRODUCT_STATE);

    if (!products) {
      products = { products: [] }
    };

    // If exists add count
    const exists = products.products.filter(prod => prod.name === elem).length !== 0;
    if (!exists) {
      products.products.push({ name: elem, count: 1 });
    } else {
      products.products.forEach(prod => {
        if (prod.name === elem) {
          prod.count++;
        }
      })
    }

    // The important thing, set state
    Statr.setState(PRODUCT_STATE, products)
  }

  removeProduct(elem: string) {

    let products: ProductState = Statr.getState(PRODUCT_STATE);
    let index = -1;
    products.products.forEach((prod, i) => {
      if (prod.name === elem) {
        prod.count--;
        if (prod.count <= 0)
          index = i;
      }
    });
    if (index !== -1)
      products.products.splice(index, 1)
    Statr.setState(PRODUCT_STATE, products)

    //Statr.setState('products', currentState);
  }
}
