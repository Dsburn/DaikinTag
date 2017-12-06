import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QRScanRoutes } from '../../routing';
import { QrscanPageComponent } from './qrscan-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QRScanRoutes)
  ],
  declarations: [QrscanPageComponent],
  bootstrap: [QrscanPageComponent]
})
export class QrscanPageModule { }
