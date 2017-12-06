import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrscanPageComponent } from './qrscan-page.component';

describe('QrscanPageComponent', () => {
  let component: QrscanPageComponent;
  let fixture: ComponentFixture<QrscanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrscanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrscanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
