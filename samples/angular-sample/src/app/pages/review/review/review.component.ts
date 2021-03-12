import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Statr from '../../../../../../../src/Statr';
import { ProductState, PRODUCT_STATE } from '../../../state/product.state';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

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
