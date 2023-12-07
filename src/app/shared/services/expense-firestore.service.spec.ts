import { TestBed } from '@angular/core/testing';

import { ExpenseFirestoreService } from './expense-firestore.service';

describe('ExpenseFirestoreService', () => {
  let service: ExpenseFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
