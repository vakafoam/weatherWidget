import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service';

import { Weather } from '../model/weather';

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],
    providers: [WeatherService]
})

export class WeatherComponent implements OnInit {

    pos: Position;
    // need to initialize data object, not to get an error while data is loading
    weatherData = new Weather(null, null, null, null, null);

    constructor(private service: WeatherService) { }

    ngOnInit() {

        /*   All logic here: 

        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position;
                this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
                    .subscribe(weather => console.log(weather),
                    err => console.log(err));
            },
            err => console.error(err));
            */

        this.getCurrentLocation();
    }

    getCurrentLocation() {
        this.service.getCurrentLocation()
            .subscribe(position => {
                this.pos = position;
                this.getCurrentWeather();
            },
            err => console.error(err));
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(weather => {
                this.weatherData.temp = weather["currently"]["temperature"];
                this.weatherData.summary = weather["currently"]["summary"];
                this.weatherData.wind = weather["currently"]["windSpeed"];
                this.weatherData.humidity = weather["currently"]["humidity"];
                this.weatherData.icon = weather["currently"]["icon"];
                console.log("weather: ", this.weatherData);
            },
            err => console.log(err));
    }
}