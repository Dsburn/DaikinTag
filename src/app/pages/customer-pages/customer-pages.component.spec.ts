import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPagesComponent } from './customer-pages.component';

describe('CustomerPagesComponent', () => {
  let component: CustomerPagesComponent;
  let fixture: ComponentFixture<CustomerPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
