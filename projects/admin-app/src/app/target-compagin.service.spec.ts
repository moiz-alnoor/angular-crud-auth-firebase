import { TestBed } from '@angular/core/testing';

import { TargetCompaginService } from './target-compagin.service';

describe('TargetCompaginService', () => {
  let service: TargetCompaginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TargetCompaginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
