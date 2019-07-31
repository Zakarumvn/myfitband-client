import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import {HttpClientModule} from '@angular/common/http';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    WorkoutDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
