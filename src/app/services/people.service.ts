import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {

  constructor(private _httpClient: HttpClient){ }

  public peoplelist() {
    return this._httpClient.get('https://services.odata.org/TripPinRESTierService/People');
  }


  // public peoplelist(){
  //   var axios = require('axios');
  //   var config = {
  //   method: 'get',
  //   url: 'https://services.odata.org/TripPinRESTierService/People',
  //   headers: { }
  //   };

  //   axios(config)
  //   .then(function (response: { data: any; }) {
  //   console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error: any) {
  //   console.log(error);
  //   });
}

