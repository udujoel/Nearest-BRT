import { TestBed, inject } from '@angular/core/testing';

import { AuthorizeGuard } from './authorize.guard';

describe('AuthorizeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizeGuard], imports: [ require('@angular/router/testing').RouterTestingModule ]
    });
  });

  it('should ...', inject([AuthorizeGuard], (guard: AuthorizeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
