import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerSettingsTitleComponent } from './timer-settings-title.component';

describe('TimerSettingsTitleComponent', () => {
  let component: TimerSettingsTitleComponent;
  let fixture: ComponentFixture<TimerSettingsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerSettingsTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerSettingsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
