/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientsService } from './clients.service';

describe('ClientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsService]
    });
  });

  it('should ...', inject([ClientsService], (service: ClientsService) => {
    expect(service).toBeTruthy();
  }));
});
