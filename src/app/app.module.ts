import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import {HttpClientModule} from '@angular/common/http';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';
import { WorkoutMapComponent } from './workout-map/workout-map.component';
import { PulseChartComponent } from './pulse-chart/pulse-chart.component';
import {GoogleChartsModule} from 'angular-google-charts';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    WorkoutDetailsComponent,
    WorkoutMapComponent,
    PulseChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
