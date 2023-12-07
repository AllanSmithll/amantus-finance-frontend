import { TestBed } from '@angular/core/testing';

import { IncomeFirestoreService } from './income-firestore.service';

describe('IncomeFirestoreService', () => {
  let service: IncomeFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
