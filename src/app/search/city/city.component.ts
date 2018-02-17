import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../model/city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() city: City;

  constructor() {}

  ngOnInit() {}

  getDate(value: number) {
    return new Date(value).toISOString();
  }

}
