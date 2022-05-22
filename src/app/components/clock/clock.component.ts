import { Component, ViewChild, ElementRef, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';  
import { ChangeDetectionStrategy, NgZone } from '@angular/core';  
import { Observable, timer, Subscription } from 'rxjs';  
import { timeInterval, map } from 'rxjs/operators';  
import { formatDate } from '@angular/common';  
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time;
  constructor(){

  }
  ngOnInit() {
    const self = this;
    setInterval(function () { self.time = self.getCurrentTime();}, 1000);
   
  }
  getCurrentTime() {
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return time
  }
 
}

