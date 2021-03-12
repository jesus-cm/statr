import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review/review.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [ReviewComponent],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class ReviewModule { }
