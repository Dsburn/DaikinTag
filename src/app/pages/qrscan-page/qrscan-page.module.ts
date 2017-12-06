import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QRScanRoutes } from '../../routing';
import { QrscanPageComponent } from './qrscan-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QRScanRoutes),
    FormsModule
  ],
  declarations: [QrscanPageComponent],
  bootstrap: [QrscanPageComponent]
})
export class QrscanPageModule { }
