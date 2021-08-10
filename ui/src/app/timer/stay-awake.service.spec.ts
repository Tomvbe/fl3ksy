import { TestBed } from '@angular/core/testing';

import { StayAwakeService } from './stay-awake.service';

describe('StayAwakeService', () => {
  let service: StayAwakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StayAwakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
