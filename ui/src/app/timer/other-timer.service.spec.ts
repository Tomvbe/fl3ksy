import { TestBed } from '@angular/core/testing';

import { OtherTimerService } from './other-timer.service';

describe('OtherTimerService', () => {
  let service: OtherTimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherTimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
