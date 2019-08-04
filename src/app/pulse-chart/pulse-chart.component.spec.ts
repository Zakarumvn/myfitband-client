import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseChartComponent } from './pulse-chart.component';

describe('PulseChartComponent', () => {
  let component: PulseChartComponent;
  let fixture: ComponentFixture<PulseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
