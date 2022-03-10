import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { ClinicComponent } from './../../modal/clinic/clinic.component';
import { SdsComponent } from './../../modal/sds/sds.component';4
import { CurriculmDevComponent } from './../../modal/curriculm-dev/curriculm-dev.component';
import { OmbudsmanComponent } from './../../modal/ombudsman/ombudsman.component';



@Component({
  selector: 'app-humanities',
  templateUrl: './humanities.component.html',
  styleUrls: ['./humanities.component.css']
})
export class HumanitiesComponent implements OnInit {

  
  @ViewChild('videoplayer') videoplayer: any;
  isEnded: boolean = false;
  
 
  mediaID: string = "1402726504"; // 1630723954, 2667647842, 1402726504
  video: any = {
    title: "",
    description: "",
    duration: "",
    key: ""
  };

  @ViewChild("videoPlayer")
  videoPlayer!: ElementRef;
  @ViewChild("canvas")
  canvas!: ElementRef;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  name = "Angular";
  
  playPause() {
    var myVideo: any = document.getElementById("my_video_1");
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  makeBig() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 560;
  }

  makeSmall() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }

  makeNormal() {
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 420;
  }

  skip(value: any) {
    let video: any = document.getElementById("my_video_1");
    video.currentTime += value;
  }

  restart() {
    let video: any = document.getElementById("my_video_1");
    video.currentTime = 0;
  }

  showSurvey() {
   this.isEnded = true;
    alert('Video Has Ended');
    console.log('Video Has Ended');
  }
  

  openClinicSurvey() {
    const dialogRef = this.dialog.open(ClinicComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openSdsSurvey() {
    const dialogRef = this.dialog.open(SdsComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCurrDev() {
    const dialogRef = this.dialog.open(CurriculmDevComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openOmbudsman() {
    const dialogRef = this.dialog.open(OmbudsmanComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
