import { TestBed, inject } from '@angular/core/testing';

import { NovostiService } from './novosti.service';

describe('NovostiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovostiService]
    });
  });

  it('should be created', inject([NovostiService], (service: NovostiService) => {
    expect(service).toBeTruthy();
  }));
});
