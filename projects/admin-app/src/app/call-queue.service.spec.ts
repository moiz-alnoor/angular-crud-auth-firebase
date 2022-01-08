import { TestBed } from '@angular/core/testing';

import { CallQueueService } from './call-queue.service';

describe('CallQueueService', () => {
  let service: CallQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
