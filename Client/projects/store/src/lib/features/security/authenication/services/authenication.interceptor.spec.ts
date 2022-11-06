import { TestBed } from '@angular/core/testing';

import { AuthenicationInterceptor } from './authenication.interceptor';

describe('AuthenicationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthenicationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthenicationInterceptor = TestBed.inject(AuthenicationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
