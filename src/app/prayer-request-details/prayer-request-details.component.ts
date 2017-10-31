import { Component, OnInit } from '@angular/core';
import { PrayerRequestsService } from '../shared/prayer-requests.service';
import { Prayer } from '../shared/prayer-request.model';

@Component({
  selector: 'app-prayer-request-details',
  templateUrl: './prayer-request-details.component.html',
  styleUrls: ['./prayer-request-details.component.css']
})
export class PrayerRequestDetailsComponent implements OnInit {
  prayerRequests: Prayer[];
  currentRequest: Prayer;
  types = [
    'Prayer',
    'Testimony',
    'Praise'
  ]

  constructor(private prayerRequestsService: PrayerRequestsService) { }

  ngOnInit() {
    this.getPrayerRequests();
    this.resetPrayer();
  }

  getPrayerRequests() {
    this.prayerRequestsService.allPrayerRequests()
      .subscribe(prayerRequests => this.prayerRequests = prayerRequests)
  }

  resetPrayer() { 
    this.currentRequest = {id: null, type: '', name: '', date: '', message: ''};
  }

  create(currentRequest) {
    this.prayerRequestsService.create(currentRequest)
      .subscribe(response => {
        this.getPrayerRequests();
        this.resetPrayer();
      });
  }
  
}
