import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Prayer } from './prayer-request.model';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/prayers';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class PrayerRequestsService {


  constructor(private http: Http) { }

  allPrayerRequests() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  create(prayer: Prayer) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(prayer), HEADER)
      .map(res => res.json());
  }

  delete(prayer: Prayer) {
    return this.http.delete(`${BASE_URL}/${prayer.id}`)
      .map(res => res.json());
  }
}
