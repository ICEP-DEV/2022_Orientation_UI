import { Component,ViewChild,OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { OrientationService } from 'src/app/orientation.service';
import { SocketioService } from './../../socketio.service'

@Component({
  selector: 'app-survey-responses',
  templateUrl: './survey-responses.component.html',
  styleUrls: ['./survey-responses.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SurveyResponsesComponent implements OnInit  {

  dataSource = new MatTableDataSource<Survey>(ELEMENT_DATA);

  columnsToDisplay = ['Firstname', 'Lastname', 'StudentNo', 'Email'];
  expandedElement: Survey | null = {Id:0,Firstname:"",Lastname:"",StudentNo:"",Email:"",Survey:[]}; 

  @ViewChild(MatPaginator, {static: true}) paginator : any
  @ViewChild(MatSort, {static: true}) sorter : any

  constructor(
    private _orientationService : OrientationService,
    private _socketConnection: SocketioService,
  )
  {

  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator 
    this.dataSource.sort = this.sorter;

    this._orientationService.getUserSurvey().subscribe((result)=>{
        this.dataSource = result
    })

    this._socketConnection.socket.on("countSurvey",(instream)=>{
      this._orientationService.getUserSurvey().subscribe((result)=>{
        this.dataSource = result
      })
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.toString();
  

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

export interface Survey {
  Id:number;
  Firstname: string;
  Lastname: string;
  StudentNo: string;
  Email: string;
  Survey: any[] ;
}

const ELEMENT_DATA: Survey[] = [];
