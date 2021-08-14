import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSettingsButtonComponent } from './timer-settings-button.component';

describe('TimerSettingsButtonComponent', () => {
  let component: TimerSettingsButtonComponent;
  let fixture: ComponentFixture<TimerSettingsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerSettingsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSettingsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
