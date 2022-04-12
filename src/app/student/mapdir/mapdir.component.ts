import { Component, OnInit } from '@angular/core';
import {  MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { OrientationService } from 'src/app/orientation.service';

@Component({
  selector: 'app-mapdir',
  templateUrl: './mapdir.component.html',
  styleUrls: ['./mapdir.component.css']
})
export class MapdirComponent implements OnInit {

  title = 'Find your campus';
  lat = -25.540316;
  lng = 28.096885;

  allCampuses:any[] = []
  all_lat_marker:any[] = []
  all_lng_marker:any[] = []
  zoomVar = 10

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<MapdirComponent>,
    private _orientationService : OrientationService
  ) { }

  ngOnInit(): void {
    this._orientationService.getCampuses().subscribe((result)=>{
      if(result.error) throw result.message 
      this.allCampuses = result.data 

      for (let index = 0; index < this.allCampuses.length; index++) {
         this.all_lat_marker[index] = JSON.parse(this.allCampuses[index].campus_coords)[0]
         this.all_lng_marker[index] = JSON.parse(this.allCampuses[index].campus_coords)[1]
      } 
    })
  }

  clickCampus(name : string,coords : any)
  {
    this.title = name+" Campus"
    this.lat = JSON.parse(coords)[0]
    this.lng = JSON.parse(coords)[1]
    this.zoomVar = 16
  } 

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
