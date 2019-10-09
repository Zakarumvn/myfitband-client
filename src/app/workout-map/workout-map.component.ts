import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkoutService} from '../service/workout.service';
import {MapService} from '../service/map.service';
import {GpsData} from '../entity/gpsData';

declare var ol: any;
@Component({
  selector: 'app-workout-map',
  templateUrl: './workout-map.component.html',
  styleUrls: ['./workout-map.component.css']
})
export class WorkoutMapComponent implements OnInit  {
  map: any;

  gpsData: Array<GpsData> = [];
  isLoadingResults = false;
  latitude = 51.23553;
  longitude = 22.54866;

  constructor(private router: Router, private route: ActivatedRoute, private mapService: MapService) { }

  ngOnInit() {
    this.loadGpsData().subscribe((data: any) => {
      this.gpsData = data;
      this.prepareMap();
    });



  }

  loadGpsData() {
    return this.mapService.getRouteForWorkout(this.route.snapshot.params.id);
  }

  prepareRoute(){
    var punkty = this.gpsData.map(function(o) {
       return ol.proj.fromLonLat([o.gpsX, o.gpsY]);
    });
    return new ol.geom.LineString(punkty);

    // return new ol.geom.LineString([
    //   ol.proj.fromLonLat([22.547564, 51.236151]),
    //   ol.proj.fromLonLat([22.547950, 51.234272]),
    //   ol.proj.fromLonLat([22.548656, 51.235912]),
    //   ol.proj.fromLonLat([22.548156, 51.236912]),
    //   ol.proj.fromLonLat([22.548956, 51.233912]),
    // ]);

  }

  prepareMap(){
    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
        //}).extend([mousePositionControl]),
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        // center: ol.proj.fromLonLat([22.5486, 51.2355]),
        center: ol.proj.fromLonLat([22.5273723, 51.2707157]),
        zoom: 17
      })
    });

    let lineString2 = new ol.geom.LineString([
      ol.proj.fromLonLat([22.547564, 51.236151]),
      ol.proj.fromLonLat([22.547950, 51.234272]),
      ol.proj.fromLonLat([22.548656, 51.235912]),
      ol.proj.fromLonLat([22.548156, 51.236912]),
      ol.proj.fromLonLat([22.548956, 51.233912]),
    ]);

    ol.proj.fromLonLat([33.8, 8.4]);

    var layerLines = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: this.prepareRoute(),
          name: 'Line'
        })]
      }),
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'red', width: 3}),
      })
    });
    this.map.addLayer(layerLines);
  }

}
