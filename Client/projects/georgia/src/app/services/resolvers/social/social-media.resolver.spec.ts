import { TestBed } from '@angular/core/testing';

import { SocialMediaResolver } from './social-media.resolver';

describe('SocialMediaResolver', () => {
  let resolver: SocialMediaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SocialMediaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
