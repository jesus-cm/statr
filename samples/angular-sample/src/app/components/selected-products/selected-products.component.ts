import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Statr from '../../../../../../src/Statr';
import { ProductState, PRODUCT_STATE } from '../../state/product.state';


@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss']
})
export class SelectedProductsComponent implements OnInit, OnDestroy {

  private subscription?: Subscription;
  selectedProducts: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.subscription = Statr.onStateChange(PRODUCT_STATE).subscribe((data: ProductState) => {
      this.selectedProducts = data.products;
    })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
