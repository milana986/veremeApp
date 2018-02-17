import { Component, OnInit, Input } from '@angular/core';

import { Forecast } from '../../model/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  @Input() forecast: Forecast;

  constructor() { }

  ngOnInit() { }

  getTime(value: number) {
    return new Date(value).toISOString();
  }

}
