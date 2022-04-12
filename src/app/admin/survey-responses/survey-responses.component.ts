import { Component,ViewChild,OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  expandedElement: Survey | null = {Firstname:"",Lastname:"",StudentNo:"",Email:"",survey:[]}; 
  @ViewChild(MatPaginator, {static: true}) paginator : any

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator 
  }
  
}

export interface Survey {
  Firstname: string;
  Lastname: string;
  StudentNo: string;
  Email: string;
  survey: any[] ;
}

const ELEMENT_DATA: Survey[] = [
  {
    Firstname: "Cebolenkosi",
    Lastname: 'Shezi',
    StudentNo: "217070554",
    Email: 'cbshezi5@gmail.com',
    survey: [
      {"question":"survquestion1","answer":"useransw1"},
      {"question":"survquestion2","answer":"useransw2"},
    ],
  }
];
