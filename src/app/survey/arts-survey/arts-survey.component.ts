import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../../user.service';
import {Survey} from 'src/app/models/survey.model';
import { SurveysService } from 'src/app/_services/surveys.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-arts-survey',
  templateUrl: './arts-survey.component.html',
  styleUrls: ['./arts-survey.component.css']
})
export class ArtsSurveyComponent implements OnInit {

  @Input() surveyData ={
    name :'', cellNum:'', faculty:'', question1:'', question2:'', question3:'', question4:'', question5:'', question6:'',question7:'',question8:'',question9:'',
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
    { answer: 'A) Wear mask, sanitize , make sure you can clean'},
    { answer: 'B) Wear mask, sanitize, make sure your hands are always clean'},
    { answer: 'C) Wear mask, make sure your hands clean all the time.'}
  ];

  selectedOption1: any; 
  options1 = [
    { answer: 'A) Learning interaction and collaboration'},
    { answer: 'B) Learning Management system'},
    { answer: 'C) Learning and tutoring'}
  ];

  selectedOption2: any; 
  options2 = [
    { answer: 'A) Exist to facilitate access to quality information'},
    { answer: 'B) Exist to offer high level information'},
    { answer: 'C) To get access to high quality information'}
  ];

  selectedOption3: any; 
  options3 = [
    { answer: 'A) Prof Nalini Moodley –Diar'},
    { answer: 'B) Prof Naline Moodley=Diar'},
    { answer: 'C) Prof Naline Modley –Diaz'},
    { answer: 'D) None of the above'}
  ];

  selectedOption4: any; 
  options4 = [
    { answer: 'A) Fine and studio arts'},
    { answer: 'B) Design studies'},
    { answer: 'C) Performing arts'}
  ];

  selectedOption5: any; 
  options5 = [
    { answer: 'A) Interior design'},
    { answer: 'B) Performing arts'},
    { answer: 'C) Visual communication'}
  ];

  selectedOption6: any; 
  options6 = [
    { answer: 'True'},
    { answer: 'False'}
  ];
  public onValueChanged(selected: any): void {
    this.selectedOption = selected;
    
    console.log(this.selectedOption); // should display the selected option.
  }

}
