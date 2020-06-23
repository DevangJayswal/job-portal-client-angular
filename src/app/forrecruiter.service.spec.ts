import { TestBed } from '@angular/core/testing';

import { ForrecruiterService } from './forrecruiter.service';

describe('ForrecruiterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForrecruiterService = TestBed.get(ForrecruiterService);
    expect(service).toBeTruthy();
  });
});
