import { TestBed } from '@angular/core/testing';

import { VisitedService } from './visited.service';

describe('VisitedService', () => {
  let service: VisitedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
