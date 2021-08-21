import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe  
  ],
  imports: [
    RouterModule.forChild([
      {path:'products', component:ProductListComponent},
      {path:'products/:id', 
      canActivate: [ProductDetailGuard],
      component:ProductDetailsComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
