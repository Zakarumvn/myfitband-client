import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkoutService} from '../service/workout.service';

@Component({
  selector: 'app-workout-map',
  templateUrl: './workout-map.component.html',
  styleUrls: ['./workout-map.component.css']
})
export class WorkoutMapComponent implements AfterViewInit  {
  @ViewChild('map', {static: true}) mapElement: ElementRef;
  map: google.maps.Map;

  constructor(private router: Router, private route: ActivatedRoute, private workoutService: WorkoutService) { }

  ngAfterViewInit(): void {
    this.renderMap();
  }

  loadMap = () => {
    var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: {lat: 24.5373, lng: 81.3042},
      zoom: 8
    });

    var marker = new window['google'].maps.Marker({
      position: {lat: 24.5373, lng: 81.3042},
      map: map,
      title: 'Hello World!',
      draggable: true,
      animation: window['google'].maps.Animation.DROP,
    });

    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="thirdHeading" class="thirdHeading">W3path.com</h3>'+
      '<div id="bodyContent">'+
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
      '</div>'+
      '</div>';

    var infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  };
  renderMap() {

    window['initMap'] = () => {
      this.loadMap();
    };
  }

}
