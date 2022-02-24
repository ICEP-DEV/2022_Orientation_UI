import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { ClinicComponent } from './../../modal/clinic/clinic.component';
import { SdsComponent } from './../../modal/sds/sds.component';4
import { CurriculmDevComponent } from './../../modal/curriculm-dev/curriculm-dev.component';
import { OmbudsmanComponent } from './../../modal/ombudsman/ombudsman.component';
import { ItComponent} from './../../modal/modals-ict/it/it.component';

/*Modals */
import { ModalComponent } from './../../modal/modal.component';
import { ModalCompscienceComponent} from './../../modal/modals-ict/modal-compscience/modal-compscience.component';
import { ModalCompsystemComponent } from './../../modal/modals-ict/modal-compsystem/modal-compsystem.component';
import { ModalFandfComponent } from './../../modal/modals-ict/modal-fandf/modal-fandf.component';
import { ModalInformaticsComponent } from './../../modal/modals-ict/modal-informatics/modal-informatics.component';
import { PlkIctComponent} from './../../modal/modals-ict/plk-ict/plk-ict.component';


@Component({
  selector: 'app-ict-plk',
  templateUrl: './ict-plk.component.html',
  styleUrls: ['./ict-plk.component.css']
})
export class IctPlkComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openAcademicPlk() {
    const dialogRef = this.dialog.open(PlkIctComponent);

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
