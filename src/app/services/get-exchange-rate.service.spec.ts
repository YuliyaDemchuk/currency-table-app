import { TestBed } from '@angular/core/testing';

import { GetExchangeRateService } from './get-exchange-rate.service';

describe('GetExchangeRateService', () => {
  let service: GetExchangeRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExchangeRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
