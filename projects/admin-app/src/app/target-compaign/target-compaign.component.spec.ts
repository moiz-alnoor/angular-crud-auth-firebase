import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetCompaignComponent } from './target-compaign.component';

describe('TargetCompaignComponent', () => {
  let component: TargetCompaignComponent;
  let fixture: ComponentFixture<TargetCompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetCompaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
