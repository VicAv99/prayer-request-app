import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerRequestListsComponent } from './prayer-request-lists.component';

describe('PrayerRequestListsComponent', () => {
  let component: PrayerRequestListsComponent;
  let fixture: ComponentFixture<PrayerRequestListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerRequestListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerRequestListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
