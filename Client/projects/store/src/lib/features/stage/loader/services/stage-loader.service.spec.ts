import { TestBed } from '@angular/core/testing';

import { StageLoaderService } from './stage-loader.service';

describe('StageLoaderService', () => {
  let service: StageLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
