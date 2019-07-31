import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkoutComponent} from './workout/workout.component';
import {WorkoutDetailsComponent} from './workout-details/workout-details.component';

const routes: Routes = [
  { path: 'workouts', component: WorkoutComponent },
  { path: 'workout-details/:id', component: WorkoutDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
