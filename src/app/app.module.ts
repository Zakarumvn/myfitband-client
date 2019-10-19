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
import { SettingsComponent } from './settings/settings.component';
import {FormsModule} from '@angular/forms';
import { AlertListComponent } from './alert-list/alert-list.component';
import {DatePipe} from '@angular/common';
import {IConfig, NgxMaskModule} from 'ngx-mask';


export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    WorkoutDetailsComponent,
    WorkoutMapComponent,
    PulseChartComponent,
    SettingsComponent,
    AlertListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
