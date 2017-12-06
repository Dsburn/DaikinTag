import { Component, OnInit } from '@angular/core';

export interface User {
  name: string; // required with minimum 5 characters
  address: {
      street?: string; // required
      postcode?: string;
  }
}

@Component({
  selector: 'app-qrscan-page',
  templateUrl: './qrscan-page.component.html',
  styleUrls: ['./qrscan-page.component.css']
})
export class QrscanPageComponent implements OnInit {

  constructor() { }

  public user: User;

  ngOnInit() {
    this.user = {
      name: '',
        address: {
         street: '',
         postcode: '8000'
      }
    };
  }

  save(model: User, isValid: boolean) {
    console.log(model, isValid);
  }

}
