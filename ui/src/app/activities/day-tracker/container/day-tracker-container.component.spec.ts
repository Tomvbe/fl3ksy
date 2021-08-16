import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTrackerContainerComponent } from './day-tracker-container.component';

describe('MenuComponent', () => {
  let component: DayTrackerContainerComponent;
  let fixture: ComponentFixture<DayTrackerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayTrackerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTrackerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
