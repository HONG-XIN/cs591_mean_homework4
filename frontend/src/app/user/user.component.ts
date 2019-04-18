import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
  	name: 'Oliver',
  	zipcode: '02446'
  };

  selectedZipcode = this.user.zipcode;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onSelect(): void {
    this.selectedZipcode = this.user.zipcode;
    this.weatherService.setZipcode(this.user.zipcode);
  }

}
