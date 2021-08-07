import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerStatusInfoComponent } from './timer-status-info.component';

describe('TimerActionComponent', () => {
  let component: TimerStatusInfoComponent;
  let fixture: ComponentFixture<TimerStatusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerStatusInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerStatusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
