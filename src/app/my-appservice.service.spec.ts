import { TestBed } from '@angular/core/testing';

import { MyAppserviceService } from './my-appservice.service';

describe('MyAppserviceService', () => {
  let service: MyAppserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAppserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
