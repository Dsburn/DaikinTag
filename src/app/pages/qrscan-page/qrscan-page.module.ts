import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QRScanRoutes } from '../../routing';
import { QrscanPageComponent } from './qrscan-page.component';
import { FormsModule } from '@angular/forms';
import { FirebaseSvcService } from '../../services/firebase-svc.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QRScanRoutes),
    FormsModule,
    AngularFirestoreModule.enablePersistence(),
    TreeModule

  ],
  declarations: [QrscanPageComponent],
  providers: [FirebaseSvcService],
  bootstrap: [QrscanPageComponent]
})
export class QrscanPageModule { }
