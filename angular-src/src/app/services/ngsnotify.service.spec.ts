import { TestBed } from '@angular/core/testing';

import { NgsnotifyService } from './ngsnotify.service';

describe('NgsnotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgsnotifyService = TestBed.get(NgsnotifyService);
    expect(service).toBeTruthy();
  });
});
