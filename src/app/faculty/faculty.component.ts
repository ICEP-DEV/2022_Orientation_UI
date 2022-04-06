import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from './../user.service';
import { ModalComponent } from './../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import { ModalCompsystemComponent } from './../modal/modals-ict/modal-compsystem/modal-compsystem.component';
import { ModalFandfComponent } from './../modal/modals-ict/modal-fandf/modal-fandf.component';
import { ModalInformaticsComponent } from './../modal/modals-ict/modal-informatics/modal-informatics.component';


/*Modals */
import { ModalCompscienceComponent} from './../modal/modals-ict/modal-compscience/modal-compscience.component';
import { ClinicComponent } from './../modal/clinic/clinic.component';
import { SdsComponent } from './../modal/sds/sds.component';4
import { CurriculmDevComponent } from './../modal/curriculm-dev/curriculm-dev.component';
import { OmbudsmanComponent } from './../modal/ombudsman/ombudsman.component';
import { ItComponent} from './../modal/modals-ict/it/it.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers: [UserService]
})
export class FacultyComponent implements OnInit {

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

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
   /* this.getVideo(this.mediaID);*/
   //var myVideo: any = document.getElementById("my_video_1");
   //myVideo.width = 320;
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

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCompScience() {
    const dialogRef = this.dialog.open(ModalCompscienceComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCompSystems() {
    const dialogRef = this.dialog.open(ModalCompsystemComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openInformatics() {
    const dialogRef = this.dialog.open(ModalInformaticsComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openFirstYear() {
    const dialogRef = this.dialog.open(ModalFandfComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openIT() {
    const dialogRef = this.dialog.open(ItComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
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
