import { Component, OnInit } from '@angular/core';
import {WorkoutService} from './workout.service';
import {Workout} from './workout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workouts: Observable<Workout[]>;


  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts() {
    this.workouts = this.workoutService.getWorkouts();
  }

}
