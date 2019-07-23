import { TestBed } from '@angular/core/testing';

import { CartDetailsService } from './cart-details.service';

describe('CartDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartDetailsService = TestBed.get(CartDetailsService);
    expect(service).toBeTruthy();
  });
});
