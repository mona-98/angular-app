import { Component, OnInit } from '@angular/core';
import { WeatherserviceService } from 'src/app/services/weatherservice.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city="";
  conditions: any;
  temperature: number;
  show=false;
  constructor(private service:WeatherserviceService) { }

  ngOnInit() {
  }
  submit() {
    alert(this.city);
    this.show =true;
    this.service.load(this.city).subscribe(data => {
      console.log(data);
      this.city = data['name']
      console.log(data['weather'][0]['main']);
      this.conditions = data['weather'][0]['main']
      this.temperature = Math.round((data['main']['temp'] - 273.15)*1.8 + 32)
    })
    console.log(this.city,this.conditions,this.temperature);
  }
}
