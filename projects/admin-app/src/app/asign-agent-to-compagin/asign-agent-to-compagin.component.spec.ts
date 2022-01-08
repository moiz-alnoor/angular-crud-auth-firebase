import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignAgentToCompaginComponent } from './asign-agent-to-compagin.component';

describe('AsignAgentToCompaginComponent', () => {
  let component: AsignAgentToCompaginComponent;
  let fixture: ComponentFixture<AsignAgentToCompaginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignAgentToCompaginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignAgentToCompaginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
