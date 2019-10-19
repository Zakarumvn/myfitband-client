import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkoutComponent} from './workout/workout.component';
import {WorkoutDetailsComponent} from './workout-details/workout-details.component';
import {WorkoutMapComponent} from './workout-map/workout-map.component';
import {PulseChartComponent} from './pulse-chart/pulse-chart.component';
import {SettingsComponent} from './settings/settings.component';
import {AlertListComponent} from './alert-list/alert-list.component';
import {WeightChartComponent} from './weight-chart/weight-chart.component';

const routes: Routes = [
  { path: 'workouts', component: WorkoutComponent },
  { path: 'workout-details/:id', component: WorkoutDetailsComponent },
  { path: 'workout-map/:id', component: WorkoutMapComponent },
  { path: 'pulse-chart/:id', component: PulseChartComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'alert-list', component: AlertListComponent },
  { path: '', component: AlertListComponent },
  { path: 'weight-chart', component: WeightChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
