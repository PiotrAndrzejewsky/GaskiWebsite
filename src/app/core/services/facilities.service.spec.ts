import { TestBed } from '@angular/core/testing';

import { FacilitiesService } from './facilities.service';

describe('FacilitiesService', () => {
  let service: FacilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
