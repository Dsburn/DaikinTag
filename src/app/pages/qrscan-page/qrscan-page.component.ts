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
  private Tag = [];
  Doc: any;

  constructor(private fbService: FirebaseSvcService) { }

  save(form) {
    this.docTag = this.fbService.getSnapshot(form.searchDOc);
    this.docTag.subscribe((data) => {
       data.map(val => {this.Tag.push({id: val.id,
                                        name: val.name,
                                        title: val.title,
                                        description: val.description,
                                        date: val.date
                                      }) ;
                                    });
  });
}

  GenerateCSV() {
    console.log(JSON.stringify(this.Tag));
    const csvData = this.ConvertToCSV(this.Tag);
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'SampleExport.csv';
    a.click();
  }

  // convert Json to CSV data in Angular2
  ConvertToCSV(objArray) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    // let row = '';

    // create Header
    // console.log(objArray);
    // // tslint:disable-next-line:forin
    // for (const index in objArray) {
    //     // Now convert each value to string and comma-separated
    //     row += index + ',';
    // }
    // console.log(`Before Slice ${row}`);
    // row = row.slice(0, -1);
    // // append Label row with line break
    // str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
        let line = '';
        // tslint:disable-next-line:forin
        for (const index in array[i]) {
            // tslint:disable-next-line:curly
            if (line !== '') line += ',';
            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}


}
