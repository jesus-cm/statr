import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ProductsComponent, SelectedProductsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [ProductsComponent, SelectedProductsComponent]
})

export class ComponentsModule { }
