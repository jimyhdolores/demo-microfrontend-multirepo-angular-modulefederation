import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from './../product-card/product-card.component';
import { ProductsComponent } from './products.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ProductCardComponent],
})
export class ProductsModule {}
