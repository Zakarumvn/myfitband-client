import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private BASE_URL = '/api/workout';

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/list`);
  }
}
