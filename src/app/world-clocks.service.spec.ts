import { TestBed } from '@angular/core/testing';

import { WorldClocksService } from './world-clocks.service';

describe('WorldClocksService', () => {
  let service: WorldClocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldClocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});