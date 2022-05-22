import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ClockComponent } from './components/clock/clock.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [{ path: 'clock', component: ClockComponent },  
{ path: 'calculator', component: CalculatorComponent },
{ path: 'wh', component: WeatherComponent },
{ path: '',   redirectTo: '/about', pathMatch: 'full' },  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
