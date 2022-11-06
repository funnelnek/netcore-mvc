import { TestBed } from '@angular/core/testing';

import { AdministratorService } from './admin.service';

describe('AdminService', () => {
  let service: AdministratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
