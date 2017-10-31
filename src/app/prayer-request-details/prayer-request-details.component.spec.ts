import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequestDetailsComponent } from './prayer-request-details.component';

describe('PrayerRequestDetailsComponent', () => {
  let component: PrayerRequestDetailsComponent;
  let fixture: ComponentFixture<PrayerRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
