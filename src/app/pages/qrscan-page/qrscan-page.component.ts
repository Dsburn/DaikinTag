import { Component, OnInit } from '@angular/core';
import { DaikinTag } from '../../model/daikin-tag';
import { Observable } from 'rxjs/Observable';
import { FirebaseSvcService } from '../../services/firebase-svc.service';
import { error } from 'selenium-webdriver';



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
  isSuccess = false;

  constructor(private fbService: FirebaseSvcService) { }

  create(form) {
    console.log(form);
    this.fbService.create({
      name: form.savedName,
      partNum: form.partNo,
      workOrderNum: form.workOrderNo,
      weight: form.weight,
      customer: form.customer,
      coilNum: form.coilNum,
      manufacturer: form.manufacturer,
      width: form.width
    }
    ).then(success =>  {this.isSuccess = true; }).catch(status => console.log(status));
  }
  save(form) {
    this.docTag = this.fbService.getSnapshot(form.searchDOc);
    this.docTag.subscribe((val) => {
       val.map(data => {this.Tag.push({
                                        id: data.id,
                                        partNum: data.partNum,
                                        workOrderNum: data.workOrderNum,
                                        weight: data.weight,
                                        customer: data.customer,
                                        coilNum: data.coilNum,
                                        manufacturer: data.manufacturer,
                                        width: data.width,
                                        dateCapture: data.dateCapture,
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
    let column = '';


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

    // print column
     // tslint:disable-next-line:forin
    //  for (const index in array[0]) {
    //     // Now convert each value to string and comma-separated
    //     console.log(array[0][index].name);
    //     // column +=  `${array[0][index].name}` + ',';
    // }
    // // console.log(column);
    // str += column + '\r\n';

    for (let i = 0; i < array.length; i++) {
        let line = '';
        // tslint:disable-next-line:forin
        for (const index in array[i]) {
            // tslint:disable-next-line:curly
            // console.log(array[i]);
            if (line !== '') {
              line += ',';
              }
            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}


}
