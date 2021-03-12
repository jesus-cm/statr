import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from '../../components/products/products.component';
import { SelectedProductsComponent } from '../../components/selected-products/selected-products.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
