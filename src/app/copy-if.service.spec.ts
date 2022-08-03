import { TestBed } from '@angular/core/testing';

import { CopyIFService } from './copy-if.service';

describe('CopyIFService', () => {
  let service: CopyIFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopyIFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
