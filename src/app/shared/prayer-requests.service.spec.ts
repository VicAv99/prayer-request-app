import { TestBed, inject } from '@angular/core/testing';

import { PrayerRequestsService } from './prayer-requests.service';

describe('PrayerRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrayerRequestsService]
    });
  });

  it('should be created', inject([PrayerRequestsService], (service: PrayerRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
