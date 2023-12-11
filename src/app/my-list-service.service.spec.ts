import { TestBed } from '@angular/core/testing';

import { MyListServiceService } from './my-list-service.service';

describe('MyListServiceService', () => {
  let service: MyListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
