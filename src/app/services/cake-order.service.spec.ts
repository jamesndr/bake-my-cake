import { TestBed } from '@angular/core/testing';

import { CakeOrderService } from './cake-order.service';

describe('CakeOrderService', () => {
  let service: CakeOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
