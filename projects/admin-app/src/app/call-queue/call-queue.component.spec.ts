import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallQueueComponent } from './call-queue.component';

describe('CallQueueComponent', () => {
  let component: CallQueueComponent;
  let fixture: ComponentFixture<CallQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
