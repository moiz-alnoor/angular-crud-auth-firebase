import { TestBed } from '@angular/core/testing';

import { CallDateService } from './call-date.service';

describe('CallDateService', () => {
  let service: CallDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
