import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentScheduleComponent } from './agent-schedule.component';

describe('AgentScheduleComponent', () => {
  let component: AgentScheduleComponent;
  let fixture: ComponentFixture<AgentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
