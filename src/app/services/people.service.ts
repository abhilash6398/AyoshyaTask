import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private _httpClient: HttpClient) {}

  public peoplelist() {
    return this._httpClient.get('https://services.odata.org/TripPinRESTierService/(S(h0twejhenom4jzc3ubvrcojw))/People');
  }

}

