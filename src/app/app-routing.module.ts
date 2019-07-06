import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkoutComponent} from './workout/workout.component';

const routes: Routes = [
  { path: 'workouts', component: WorkoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
