import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QRScanRoutes } from '../../routing';
import { QrscanPageComponent } from './qrscan-page.component';
import { FormsModule } from '@angular/forms';
import { FirebaseSvcService } from '../../services/firebase-svc.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from 'angular2-datatable';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QRScanRoutes),
    FormsModule,
    AngularFirestoreModule,
    NgbCollapseModule,
    DataTableModule

  ],
  declarations: [QrscanPageComponent],
  providers: [FirebaseSvcService],
  bootstrap: [QrscanPageComponent]
})
export class QrscanPageModule { }
