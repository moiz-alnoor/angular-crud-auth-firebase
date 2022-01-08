import { TestBed } from '@angular/core/testing';

import { CallDataService } from './call-data.service';

describe('CallDataService', () => {
  let service: CallDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
