import { TestBed } from '@angular/core/testing';

import { AgentScheduleService } from './agent-schedule.service';

describe('AgentScheduleService', () => {
  let service: AgentScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
