import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Workout} from '../entity/workout';
import {WorkoutService} from '../service/workout.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit {

  workout: Observable<Workout>;
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkoutDetails();
  }

  getWorkoutDetails() {
    this.workoutService.getWorkout(this.route.snapshot.params.id)
      .subscribe((data: any) => {
        this.workout = data;
        console.log(this.workout);
        this.isLoadingResults = false;
      });
  }


}
