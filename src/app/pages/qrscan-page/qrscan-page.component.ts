import { Component, OnInit } from '@angular/core';
import { DaikinTag } from '../../model/daikin-tag';
import { Observable } from 'rxjs/Observable';
import { FirebaseSvcService } from '../../services/firebase-svc.service';

@Component({
  selector: 'app-qrscan-page',
  templateUrl: './qrscan-page.component.html',
  styleUrls: ['./qrscan-page.component.css']
})
export class QrscanPageComponent {

  docTag: Observable<DaikinTag[]>;
  content: string;

  constructor(private fbService: FirebaseSvcService) { }

  save(form) {
    this.docTag = this.fbService.getSnapshot(form.searchDOc);
  }

  GenerateCSV() {
    console.log(this.docTag);
  }


}
