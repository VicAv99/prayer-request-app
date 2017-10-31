import { Component, OnInit } from '@angular/core';
import { PrayerRequestsService } from '../shared/prayer-requests.service';
import { Prayer } from '../shared/prayer-request.model';

@Component({
  selector: 'app-prayer-request-lists',
  templateUrl: './prayer-request-lists.component.html',
  styleUrls: ['./prayer-request-lists.component.css']
})
export class PrayerRequestListsComponent implements OnInit {
  prayerRequests: Prayer[];
  currentRequest: Prayer;

  constructor(private prayerRequestsService: PrayerRequestsService) { }

  ngOnInit() {
    this.getPrayerRequests();
    this.resetPrayer();
  }

  getPrayerRequests() {
    this.prayerRequestsService.allPrayerRequests()
      .subscribe(prayerRequests => this.prayerRequests = prayerRequests);
  }

  resetPrayer() { 
    this.currentRequest = {id: null, type: '', name: '', date: '', message: ''};
  }

  delete(currentRequest) {
    this.prayerRequestsService
    .delete(currentRequest)
    .subscribe(response => {
        this.getPrayerRequests();
      });
  }
}