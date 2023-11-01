import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { reservationProccesFinishedGuard } from './reservation-procces-finished.guard';

describe('reservationProccesFinishedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => reservationProccesFinishedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
