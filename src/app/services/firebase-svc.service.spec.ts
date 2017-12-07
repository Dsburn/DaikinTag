import { TestBed, inject } from '@angular/core/testing';

import { FirebaseSvcService } from './firebase-svc.service';

describe('FirebaseSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseSvcService]
    });
  });

  it('should be created', inject([FirebaseSvcService], (service: FirebaseSvcService) => {
    expect(service).toBeTruthy();
  }));
});
