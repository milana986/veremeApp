import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';
import { City } from '../model/city';
import { ConvertPipe } from '../convert.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  querySearch: string;
  queryArray: string[];
  differenceArray: string[];
  cities: City[] = this.searchService.cities;

  constructor( private searchService: SearchService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.querySearch) {
      this.queryArray = this.querySearch.includes(',') ? this.querySearch.split(',').map(s => s.trim()) :new Array(this.querySearch.trim());
      this.getCities(this.cities);
    }
  }

  getCities(cities) {
    this.differenceArray = this.queryArray.filter( elem =>
        !cities.find(city => city.name.toLowerCase() === elem.toLowerCase())
    );
    this.differenceArray.forEach( elem => {
      this.searchService.getCity(elem).subscribe(
        data => this.searchService.addCity(data),
        err => alert('Check spelling'));
    });
  }

  deleteCity(cityName: string) {
    this.cities.filter( (elem, i) => {
      if ( elem.name === cityName) {
       this.cities.splice(i, 1); }
    });
  }


}

