import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class WeatherService {

  zipcode = '02446';

  API_URL = 'http://localhost:8000';

  constructor( private httpClient: HttpClient ) { }

  getWeather() {
  	return this.httpClient.get(`${this.API_URL}/api/weather/${this.zipcode}`);
  }

  setZipcode(zipcode) {
  	this.zipcode = zipcode;
  	console.log(zipcode);
  }

}
