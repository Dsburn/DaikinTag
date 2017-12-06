import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SupplierRoutes } from '../../routing';
import { SupplierPageComponent } from './supplier-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  declarations: [SupplierPageComponent],
  bootstrap: [SupplierPageComponent]
})
export class SupplierPageModule { }
