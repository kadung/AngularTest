import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductShellComponent } from './container/product-shell/product-shell.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/product.reducer';
import { productRoutes } from './products-ngrx.routes';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effect';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductNgRxModule { }
