import { TestBed } from '@angular/core/testing';

import { ContentSelectedService } from './content-selected.service';

describe('ContentSelectedService', () => {
  let service: ContentSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
