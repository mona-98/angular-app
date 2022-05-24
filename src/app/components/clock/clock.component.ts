import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import {
  getAllCountries,
  getTimezonesForCountry
} from 'countries-and-timezones';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
  time;
  countries = [];
  selectedCountryId = " ";
  selectedTimezone = " ";
  timezones = [];
  setIntervalId;
  constructor() {

  }
  ngOnInit() {
    const self = this;

    let allCountries = getAllCountries()
    Object.keys(allCountries).forEach(function (key) {
      self.countries.push(allCountries[key])
    })
  }
  getCurrentTime(currentDate) {
    //let currentDate = new Date();
    console.log("getcurrenttime method is called");
    //let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    let time = currentDate.toLocaleTimeString();
    return time
  }
  click() {
    alert("click function is called");
    console.log(getAllCountries());
  }

  onSelectCountry() {
    const self = this;
    this.selectedTimezone = " ";
    this.time = " ";
    this.timezones = [];
    console.log("selectedCountryId", this.selectedCountryId);
    let timezone = getTimezonesForCountry(this.selectedCountryId);
    Object.keys(timezone).forEach(function (key) {
      self.timezones.push(timezone[key])
    })
  }

  onSelectTimezone() {
    console.log("selectedTimezone", this.selectedTimezone);
    const self = this;
    this.setIntervalId = setInterval(function () {
      let date: Date = new Date(new Date().toLocaleString('en-US', {
        timeZone: self.selectedTimezone
      }))
      self.time = self.getCurrentTime(date);
      let hours = date.getHours();
      if (hours >= 6 && hours < 18) {
        self.changeTheme(false)
      } else {
        self.changeTheme(true)
      }
    }, 1000);

  }

  changeTheme(isDark: boolean) {
    console.log('changeTheme', isDark)
    if (isDark) {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    } else {
      document.body.style.backgroundColor = 'transparent'
      document.body.style.color = 'black'
    }
  }

  ngOnDestroy(): void {
    this.changeTheme(false)
    clearInterval(this.setIntervalId)
  }
}
