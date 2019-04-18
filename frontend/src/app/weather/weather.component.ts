import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  data = {};

  constructor(
    private weatherService: WeatherService,
  ) {}

  ngOnInit() {
  	this.display();
  }

  display() {
  	this.weatherService.getWeather()
      .subscribe(data => {this.data = data; console.log(data)});
  }

}
