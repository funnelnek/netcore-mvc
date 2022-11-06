import { TestBed } from '@angular/core/testing';

import { ApplicationHttpInterceptor } from './application-http.interceptor';

describe('ApplicationHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApplicationHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApplicationHttpInterceptor = TestBed.inject(ApplicationHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
