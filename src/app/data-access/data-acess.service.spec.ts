import { TestBed } from '@angular/core/testing';

import { DataAcessService } from './data-acess.service';

describe('DataAcessService', () => {
  let service: DataAcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
