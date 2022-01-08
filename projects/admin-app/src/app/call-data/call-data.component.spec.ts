import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallDataComponent } from './call-data.component';

describe('CallDataComponent', () => {
  let component: CallDataComponent;
  let fixture: ComponentFixture<CallDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
