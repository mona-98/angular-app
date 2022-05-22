import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result ="";
  expression ="";
  constructor() { }
  
  ngOnInit() {
  }
  onSubmit() {
    alert(this.expression);
    this. result = eval(this.expression);
  }
}
