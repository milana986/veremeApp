import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { City } from '../model/city';
import { Forecast } from '../model/forecast';

const url = 'http://api.openweathermap.org/data/2.5/weather/?q=';
const apiKey = '&appid=dd52374252d73feff81a1b4391daeaa2';

@Injectable()
export class SearchService {
  cities: City[];

  constructor( private http: HttpClient) {
    this.cities = [];
   }

  getCity(name: string): Observable<City> {
    return this.http.get(url + name + apiKey)
      .map( response => new City(response))
      .catch( err => Observable.throw(err.json().error || 'Server error'));
  }

  getCityForecast(name: string): Observable<Forecast> {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast/?q=' + name + apiKey)
    .map( response => new Forecast(response))
    .catch( err => Observable.throw(err.json().error || 'Server error'));
  }

  addCity(city: City) {
    this.cities.push(city);
  }
}
