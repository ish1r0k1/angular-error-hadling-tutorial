import { TestBed, inject } from '@angular/core/testing';

import { ServerErrorsService } from './server-errors.service';

describe('ServerErrorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerErrorsService]
    });
  });

  it('should be created', inject([ServerErrorsService], (service: ServerErrorsService) => {
    expect(service).toBeTruthy();
  }));
});
