import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import {Survey} from 'src/app/models/survey.model';
import { SurveysService } from 'src/app/_services/surveys.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ict-survey',
  templateUrl: './ict-survey.component.html',
  styleUrls: ['./ict-survey.component.css']
})
export class IctSurveyComponent implements OnInit {

  
  @Input() surveyData ={
    name :"", cellNum:"", faculty:"", question1:"", question2:"", question3:"", question4:"", question5:"", question6:"",question7:"",question8:"",question9:"",
  }

  survey: Survey = new Survey();
  submitted = false;

  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private surveyService: SurveysService) { }

  ngOnInit(): void {
  }


  submitSurvey(): void {
    this.surveyService.create(this.survey).then(() => {
      console.log('Survey response successfully sent!');
      this.submitted = true;
    });
  }

  newSurvey(): void {
    this.submitted = false;
    this.survey = new Survey();
  }

  selectedOption: any; 
  options = [
    { answer: "True"},
    { answer: "False"}
  ];

  selectedOption1: any; 
  options1 = [
    { answer: "True"},
    { answer: "False"}
  ];

  selectedOption2: any; 
  options2 = [
    { answer: "A) 3"},
    { answer: "B) 6"},
	  { answer: "C) 8"},
    { answer: "D) 5"},
  ];

  selectedOption3: any; 
  options3 = [
    { answer: "True"},
    { answer: "False"}
  ];

  selectedOption4: any; 
  options4 = [
    { answer: "A) Accommodation Residence Life & Catering"},
    { answer: "B) Accommodation Residential LIFE & Catering"},
	  { answer: "C) Accommodate Residence Life & catering"},
    { answer: "D) Accommodation Residence life & Cater"}
  ];

  selectedOption5: any; 
  options5 = [
    { answer: "True"},
    { answer: "False"}
  ];

  public onValueChanged(selected: any): void {
    this.selectedOption = selected;
    
    console.log(this.selectedOption); // should display the selected option.
  }

}
