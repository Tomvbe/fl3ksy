import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerIntervalInputComponent } from './timer-interval-input.component';

describe('TimerIntervalInputComponent', () => {
  let component: TimerIntervalInputComponent;
  let fixture: ComponentFixture<TimerIntervalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerIntervalInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerIntervalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
