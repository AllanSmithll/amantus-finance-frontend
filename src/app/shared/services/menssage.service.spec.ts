import { TestBed } from '@angular/core/testing';

import { MenssageService } from './menssage.service';

describe('MenssageService', () => {
  let service: MenssageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenssageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
