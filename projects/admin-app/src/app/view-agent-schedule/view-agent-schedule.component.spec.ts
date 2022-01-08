import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgentScheduleComponent } from './view-agent-schedule.component';

describe('ViewAgentScheduleComponent', () => {
  let component: ViewAgentScheduleComponent;
  let fixture: ComponentFixture<ViewAgentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAgentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAgentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
