import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result ="";
  expression ="";
  history = [];
  showHistory: boolean = false;
  constructor() { }
  
  ngOnInit() {
  }
  onSubmit() {
    this. result = eval(this.expression);
    if (this.expression) {
      let json = {
        expression: this.expression,
        result: this.result
      }
      this.history.push(json)
    }
  }

  toggleHistory() {
    this.showHistory = !this.showHistory
  }
}
