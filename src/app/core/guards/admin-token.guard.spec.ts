import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminTokenGuard } from './admin-token.guard';

describe('adminTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
