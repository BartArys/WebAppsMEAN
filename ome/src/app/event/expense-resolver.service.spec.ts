import { TestBed, inject } from '@angular/core/testing';

import { ExpenseResolverService } from './expense-resolver.service';

describe('ExpenseResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseResolverService]
    });
  });

  it('should be created', inject([ExpenseResolverService], (service: ExpenseResolverService) => {
    expect(service).toBeTruthy();
  }));
});
