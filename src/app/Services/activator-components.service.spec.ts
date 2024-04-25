import { TestBed } from '@angular/core/testing';

import { ActivatorComponentsService } from './activator-components.service';

describe('ActivatorComponentsService', () => {
  let service: ActivatorComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatorComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
