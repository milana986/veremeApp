import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SearchService } from '../services/search.service';
import { City } from '../model/city';
import { Forecast } from '../model/forecast';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  city: City;
  forecast: Forecast;

  constructor( private router: ActivatedRoute,  private searchService: SearchService,  private routing: Router) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      const name = params['name'];
      Observable.forkJoin(this.searchService.getCity(name), this.searchService.getCityForecast(name)).subscribe( data => {
        this.city = data[0];
        this.forecast = data[1];
      });
    });
  }

}
