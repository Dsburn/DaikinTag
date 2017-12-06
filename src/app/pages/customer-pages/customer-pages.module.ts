import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutes } from '../../routing';
import { RouterModule } from '@angular/router';
import { CustomerPagesComponent } from './customer-pages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  declarations: [CustomerPagesComponent],
  bootstrap: [CustomerPagesComponent]
})
export class CustomerPagesModule { }
