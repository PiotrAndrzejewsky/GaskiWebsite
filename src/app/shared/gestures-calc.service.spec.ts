import { TestBed } from '@angular/core/testing';

import { GesturesCalcService } from './gestures-calc.service';

describe('GesturesCalcService', () => {
  let service: GesturesCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GesturesCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
