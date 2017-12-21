import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DaikinTag } from "../../model/daikin-tag";
import { Observable } from "rxjs/Observable";
import { FirebaseSvcService } from "../../services/firebase-svc.service";
import { error } from "selenium-webdriver";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-qrscan-page",
  templateUrl: "./qrscan-page.component.html",
  styleUrls: ["./qrscan-page.component.css"]
})
export class QrscanPageComponent implements OnInit {
  docTag: Observable<DaikinTag[]>;
  content: string;
  public Tag = [];
  Doc: any;
  isSuccess = false;
  isValid = true;
  public isCollapsed = true;

  @ViewChild('collapseButton') dataContainer: ElementRef;

  loadForm(isCollapsed) {
    if (isCollapsed) {
      this.dataContainer.nativeElement.innerHTML = 'Show Form';
    }else {
      this.dataContainer.nativeElement.innerHTML = 'Hide Form';
    }
    this.isCollapsed = isCollapsed;
  }

  constructor(private fbService: FirebaseSvcService) {}

  ngOnInit() {
    this.fbService.change.subscribe(isOpen => {
      if (!isOpen) {
        this.docTag = null;
      }
      this.isValid = isOpen;
    });
  }

  create(form) {
    console.log(form);
    this.fbService
      .create({
        name: form.savedName,
        partNum: form.partNo,
        workOrderNum: form.workOrderNo,
        weight: form.weight,
        customer: form.customer,
        coilNum: form.coilNum,
        manufacturer: form.manufacturer,
        width: form.width
      })
      .then(success => {
        this.isSuccess = true;
      })
      .catch(status => console.log(status));
  }
  save(form) {
    this.docTag = this.fbService.getSnapshot(form.searchDOc);
    if (this.docTag !== null) {
      this.docTag.subscribe(
        val => {
          if (val.length === 0) {
            this.isValid = false;
          } else {
            val.map(data => {
              this.Tag.push({
                id: data.id,
                partNum: data.partNum,
                workOrderNum: data.workOrderNum,
                weight: data.weight,
                customer: data.customer,
                coilNum: data.coilNum,
                manufacturer: data.manufacturer,
                width: data.width,
                dateCapture: data.dateCapture
              });
            });
          }
        },
        stateErr => {
          console.log('Error: Doctag');
        },
        () => {
          this.docTag = null;
        }
      );
    }
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
    const array =
      typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    // let row = '';
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
