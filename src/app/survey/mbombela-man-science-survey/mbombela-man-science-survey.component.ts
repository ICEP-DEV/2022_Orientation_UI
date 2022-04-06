import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../../user.service';
import {Survey} from 'src/app/models/survey.model';
import { SurveysService } from 'src/app/_services/surveys.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mbombela-man-science-survey',
  templateUrl: './mbombela-man-science-survey.component.html',
  styleUrls: ['./mbombela-man-science-survey.component.css']
})
export class MbombelaManScienceSurveyComponent implements OnInit {

  @Input() surveyData ={
    name :"", cellNum:"", faculty:"", question1:"", question2:"", question3:"", question4:"", question5:"", question6:"",question7:"",question8:"",question9:"",
  }

  survey: Survey = new Survey();
  submitted = false;

  constructor(private _formBuilder: FormBuilder, private _userService: UserService, private surveyService: SurveysService) { }

  ngOnInit(): void {
  }

  profileForm = this._formBuilder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    physicalContact:[''],
    nearPatients:['']
  });

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
    { answer: "Yes"},
    { answer: "No"}
  ];

  selectedOption1: any; 
  options1 = [
    { answer: "True"},
    { answer: "False"}
	];

  selectedOption2: any; 
  options2 = [
    { answer: "Yes"},
    { answer: "No"}
  ];

  selectedOption3: any; 
  options3 = [
    { answer: "True"},
    { answer: "False"}
  ];

  public onValueChanged(selected: any): void {
    this.selectedOption = selected;
    
    console.log(this.selectedOption); // should display the selected option.
  }


}
