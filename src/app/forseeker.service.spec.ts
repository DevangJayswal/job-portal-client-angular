import { TestBed } from '@angular/core/testing';

import { ForseekerService } from './forseeker.service';

describe('ForseekerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForseekerService = TestBed.get(ForseekerService);
    expect(service).toBeTruthy();
  });
});
