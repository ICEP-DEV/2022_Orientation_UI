import { Component,ViewChild,OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { OrientationService } from 'src/app/orientation.service';
import { SocketioService } from './../../socketio.service'
import { MatTableFilter } from 'mat-table-filter';

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

  generateState : string = "d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm"
  disabledGenerate : boolean = true;

  dataSource = new MatTableDataSource<Survey>(ELEMENT_DATA);

  columnsToDisplay = ['Firstname', 'Lastname', 'StudentNo', 'Email'];
  expandedElement: Survey | null = {Id:0,Firstname:"",Lastname:"",StudentNo:"",Email:"",Survey:[]}; 

  filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  filterEntity: Survey = { Id:0,Firstname: "",Lastname: "",StudentNo: "",Email: "",Survey:[]};

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
    this.filterType = MatTableFilter.ANYWHERE;

    this._orientationService.getUserSurvey().subscribe((result)=>{
        if(!result.error)
        {
          if(result.length == 1)
          {
            this.disabledGenerate = false;
            this.generateState = "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"  
          }
          else 
          {
            this.disabledGenerate = true;
            this.generateState = "d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm" 
          }
          this.dataSource = new MatTableDataSource(result)
          this.dataSource.sort = this.sorter;
          this.filterType = MatTableFilter.ANYWHERE;
        }
    })

    this._socketConnection.socket.on("countSurvey",(instream)=>{
      if(this.dataSource.filteredData.length == 1)
      { 
        this.disabledGenerate = false;
        this.generateState = "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"  
      }
      else 
      {
        this.disabledGenerate = true;
        this.generateState = "d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm" 
      }
      this._orientationService.getUserSurvey().subscribe((result)=>{
        this.dataSource = result
      })
    });
  }

  applyFilter(event: Event) {
    if(this.dataSource.filteredData.length == 1)
    {
      this.disabledGenerate = false;
      this.generateState = "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"  
    }
    else 
    {
      this.disabledGenerate = true;
      this.generateState = "d-none d-sm-inline-block btn btn-sm btn-secondary shadow-sm" 
    }
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  generateRep()
  {
    console.log(this.dataSource.filteredData[0])

    this._orientationService.getSurveyReport({"data":this.dataSource.filteredData[0]}).subscribe((e)=>console.log(e))
    
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
