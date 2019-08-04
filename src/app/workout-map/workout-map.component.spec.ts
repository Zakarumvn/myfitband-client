import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutMapComponent } from './workout-map.component';

describe('WorkoutMapComponent', () => {
  let component: WorkoutMapComponent;
  let fixture: ComponentFixture<WorkoutMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
