import { TestBed } from '@angular/core/testing';

import { ShaService } from './sha.service';

describe('ShaService', () => {
  let service: ShaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
