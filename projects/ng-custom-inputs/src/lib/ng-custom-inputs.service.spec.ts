import { TestBed } from '@angular/core/testing';

import { NgCustomInputsService } from './ng-custom-inputs.service';

describe('NgCustomInputsService', () => {
  let service: NgCustomInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCustomInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
