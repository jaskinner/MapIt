import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom: number = 10;
  // Start position
  lat: number = 40.7128;
  lng: number = -74.0059;

  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:boolean;

  markers: marker[] = [
    {
      name: 'Company One',
      lat: 35.7796,
      lng: -78.6382,
      draggable: true
    },
    {
      name: 'Company Two',
      lat: 35.7796,
      lng: -78.5382,
      draggable: true
    },
    {
      name: 'Company Three',
      lat: 35.6796,
      lng: -78.6382,
      draggable: true
    }
  ];

  constructor(){}

  clickedMarker(marker:marker, index:number){
    console.log("clicked marker " + marker.name + " at " + index)
  };

  mapClicked($event:any){
    let newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    };
    this.markers.push(newMarker);
  }

  markerDragEnd(marker: any, $event: any){
    let updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    };

    let newLat = $event.coords.lat;
    let newLng = $event.coords.lng;
  }

  addMarker(){
    let newMarker = {
      name:this.markerName,
      lat:parseFloat(this.markerLat),
      lng:parseFloat(this.markerLng),
      draggable:this.markerDraggable
    };

    this.markers.push(newMarker);
  }
}

interface marker {
  name?:string;
  lat: number;
  lng: number;
  draggable: boolean;
}
