import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
   serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
   apiKey: String = '425ecba4234810651b21df0b863d96f9'

  constructor(private http: HttpClient) { }
  load(city: String) {
    return this.http.get(this.serviceUrl + '?q=' + city + '&APPID=' + this.apiKey)
  }
}
