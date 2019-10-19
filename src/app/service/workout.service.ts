import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Alert} from '../entity/alert';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private BASE_URL = '/api/workout';

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/list`);
  }

  getWorkout(workoutId) {
    return this.http.get(`${this.BASE_URL}/${workoutId}`);
  }

  getPulseChart(workoutId) {
    return this.http.get(`${this.BASE_URL}/pulse/${workoutId}`);
  }

  getAlerts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/alerts`);
    // return this.getMockAlerts() ;
  }

  getMockAlerts(): any {
    const alerts: Alert[] = [{
      date: new Date(),
      type: 'Przemęczenie',
      description: 'Uwaga! Podczas treningu Twój puls osiagnął niebezpieczny poziom: 120 uderzeń na sekundę.'
    },
      {
        date: new Date(),
        type: 'Brak aktywności',
        description: 'Uwaga! System wykrył brak aktywności podczas treningu.'
      }
      ];

    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(alerts);
      }, 1000);
    });

    return studentsObservable;
  }

}
