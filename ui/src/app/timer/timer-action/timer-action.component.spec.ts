import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerActionComponent } from './timer-action.component';

describe('TimerActionComponent', () => {
  let component: TimerActionComponent;
  let fixture: ComponentFixture<TimerActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
