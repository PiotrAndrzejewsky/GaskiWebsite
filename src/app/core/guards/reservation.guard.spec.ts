import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { reservationGuard } from './reservation.guard';

describe('reservationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => reservationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
