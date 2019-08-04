import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkoutService} from '../service/workout.service';

@Component({
  selector: 'app-pulse-chart',
  templateUrl: './pulse-chart.component.html',
  styleUrls: ['./pulse-chart.component.css']
})
export class PulseChartComponent implements OnInit {
  isLoadingResults = true;
  data;
  pulsesData: Array<number | string> = [];

  title = 'Wykres tętna';
  type = 'LineChart';
  columnNames = ['Godzina', 'Odczyt'];
  options = {
    width: 550,
    height: 400
  };


  constructor(private router: Router, private route: ActivatedRoute, private workoutService: WorkoutService) {
  }

  ngOnInit() {
    this.drawChart(this.getData());
    this.workoutService.getPulseChart(this.route.snapshot.params.id)
      .subscribe((data: any) => {

        for (let p of data) {
          p.value = Number(p.value);
        }
        console.log('pomiary pulsu dla treningu nr ' + this.route.snapshot.params.id);
        this.isLoadingResults = false;
        if (data.length > 0) {
          this.drawChart(this.prepareArray(data));
        }
      });
  }

  drawChart(data) {
    this.data = data;
    this.title = 'Wykres tętna';
    this.type = 'LineChart';
    this.columnNames = ['Godzina', 'Odczyt'];
    this.options = {
      width: 550,
      height: 400
    };

  }

  getData() {
    return [
      ['7:45', 45],
      ['7:46', 49],
      ['7:47', 57],
      ['7:48', 62],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:49', 65],
      ['7:50', 68]
    ];
  }

  prepareArray(data) {
    for (let i = 0; i < data.length; i++) {
      this.pulsesData.push([data[i].date as unknown as string, data[i].value] as unknown as number);
    }
    return this.pulsesData;
  }
}
