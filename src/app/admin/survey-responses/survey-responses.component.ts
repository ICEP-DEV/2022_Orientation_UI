import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-survey-responses',
  templateUrl: './survey-responses.component.html',
  styleUrls: ['./survey-responses.component.css']
})
export class SurveyResponsesComponent implements OnInit {

  
  currentIndex = -1;
  title = '';
  
  constructor() { }

  ngOnInit(): void {
    this.retrieveSurveys();
  }

  refreshList(): void {
   
    this.currentIndex = -1;
    this.retrieveSurveys();
  }

  retrieveSurveys(): void {
   
  }

  setActiveSurvey( index: number): void {
    this.currentIndex = index;
  }

  removeAllSurveys(): void {
   
  }

}
