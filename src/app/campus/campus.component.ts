import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ArcadiaComponent } from './arcadia/arcadia.component';
import { ArtsComponent } from './arts/arts.component';
import { EmalahleniComponent } from './emalahleni/emalahleni.component';
import { MbombelaComponent } from './mbombela/mbombela.component';
import { PlkComponent } from './plk/plk.component';
import { PtaComponent } from './pta/pta.component';
import { RankuwaComponent } from './rankuwa/rankuwa.component';
import { SoshNorthComponent } from './sosh-north/sosh-north.component';
import { SoshSouthComponent } from './sosh-south/sosh-south.component';
import { DefaultCampusComponent } from './default-campus/default-campus.component';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
/*---------------------------------*/
import { FacultyComponent } from '../faculty/faculty.component';
import { EconomicsComponent } from '../faculty/economics/economics.component';
import { EconomicsMbombelaComponent} from '../faculty/economics-mbombela/economics-mbombela.component';
import { EconomicsPlkComponent } from '../faculty/economics-plk/economics-plk.component';
import { EngineeringComponent } from '../faculty/engineering/engineering.component';
import { EngineeringEmalahleniComponent } from '../faculty/engineering-emalahleni/engineering-emalahleni.component';
import { FoartsComponent } from '../faculty/foarts/foarts.component';
import { HumanitiesComponent } from '../faculty/humanities/humanities.component';
import { HumanitiesEmalahleniComponent } from '../faculty/humanities-emalahleni/humanities-emalahleni.component';
import { HumanitiesNorthComponent } from '../faculty/humanities-north/humanities-north.component';
import { HumanitiesPlkComponent } from '../faculty/humanities-plk/humanities-plk.component';
import { IctEmalahleniComponent } from '../faculty/ict-emalahleni/ict-emalahleni.component';
import { IctPlkComponent } from '../faculty/ict-plk/ict-plk.component';
import { ManSciencePlkComponent } from '../faculty/man-science-plk/man-science-plk.component';
import { ManagementComponent } from '../faculty/management/management.component';
import { ManagementEmalahleniComponent} from '../faculty/management-emalahleni/management-emalahleni.component';
import { MbombelaHumanitiesComponent } from '../faculty/mbombela-humanities/mbombela-humanities.component';
import { MbombelaManScienceComponent } from '../faculty/mbombela-man-science/mbombela-man-science.component';
import { ScienceComponent } from '../faculty/science/science.component';
import { SciencePtaComponent } from '../faculty/science-pta/science-pta.component';

import { UserService } from './../user.service';

// Surveys
import { Survey} from 'src/app/models/survey.model';
import { SurveysService } from 'src/app/_services/surveys.service';
import { EventEmitterService} from '../_services/event-emitter.service';

import { ArtsSurveyComponent } from '../survey/arts-survey/arts-survey.component';
import { EconomicsMbombelaSurveyComponent } from '../survey/economics-mbombela-survey/economics-mbombela-survey.component';
import { EconomicsPlkSurveyComponent } from '../survey/economics-plk-survey/economics-plk-survey.component';
import { EconomicsSurveyComponent } from '../survey/economics-survey/economics-survey.component';
import { EngineeringEmalahleniSurveyComponent } from '../survey/engineering-emalahleni-survey/engineering-emalahleni-survey.component';
import { EngineeringSurveyComponent } from '../survey/engineering-survey/engineering-survey.component';
import { FoartsSurveyComponent } from '../survey/foarts-survey/foarts-survey.component';
import { HumanitiesEmalahleniSurveyComponent } from '../survey/humanities-emalahleni-survey/humanities-emalahleni-survey.component';
import { HumanitiesNorthSurveyComponent } from '../survey/humanities-north-survey/humanities-north-survey.component';
import { HumanitiesPlkSurveyComponent } from '../survey/humanities-plk-survey/humanities-plk-survey.component';
import { HumanitiesSurveyComponent } from '../survey/humanities-survey/humanities-survey.component';
import { IctSurveyComponent } from '../survey/ict-survey/ict-survey.component';
import { IctEmalahleniSurveyComponent } from '../survey/ict-emalahleni-survey/ict-emalahleni-survey.component';
import { IctPlkSurveyComponent } from '../survey/ict-plk-survey/ict-plk-survey.component';
import { ManSciencePlkSurveyComponent } from '../survey/man-science-plk-survey/man-science-plk-survey.component';
import { ManagementEmalahleniSurveyComponent } from '../survey/management-emalahleni-survey/management-emalahleni-survey.component';
import { ManagementSurveyComponent } from '../survey/management-survey/management-survey.component';
import { MbombelaHumanitiesSurveyComponent } from '../survey/mbombela-humanities-survey/mbombela-humanities-survey.component';
import { MbombelaManScienceSurveyComponent } from '../survey/mbombela-man-science-survey/mbombela-man-science-survey.component';
import { SciencePtaSurveyComponent } from '../survey/science-pta-survey/science-pta-survey.component';
import { ScienceSurveyComponent } from '../survey/science-survey/science-survey.component';
import { MatStep, MatStepperNext } from '@angular/material/stepper';

import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})


export class CampusComponent implements OnInit {

  @Input() surveyData = {
    name : '', cellNum: '', faculty: '', question1: '', question2: '', question3: '', question4: '', question5: '', question6: '', question7: '', question8: '', question9: '',
  };
 
  stepNumber : number = 0;
  firstVal : string =""

  campusComponent: any;
  facultyComponent: any;
  surveyComponent: any;

  survey: Survey = new Survey();

  submitted = false;

  isLinear = true;
  surveyForm!: FormGroup;
  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;

  stepOneDone: boolean = false;
  stepTwoDone: boolean = false;
  stepThreeDone: boolean = false;
  stepFourDone: boolean = false;
  stepFiveDone: boolean = false;

  // tslint:disable-next-line: variable-name
  constructor(
    private _formBuilder: FormBuilder,
    private surveyService: SurveysService,
    private eventEmitterService: EventEmitterService,
    private _cookiesService : CookieService,
    private router: Router,
    
    ) { 
      
      if(!this._cookiesService.get("userEmail"))
      {
        this.router.navigate(['student-login'])
      }

      
      
    }

    // firstStep()
    // {
    //     this.firstVal = 'true'
    // }


    stepOne(stepper: MatStepper)
    {
      this.stepOneDone = true
      next(stepper)
    }

    stepTwo(stepper: MatStepper)
    {
      this.stepTwoDone = true
      next(stepper)
    }

    stepThree(stepper: MatStepper)
    {
      this.stepThreeDone = true
      next(stepper)
    }

    stepFour(stepper: MatStepper)
    {
      this.stepFourDone = true
      next(stepper)
    }

    stepFive(stepper: MatStepper)
    {
      this.stepFiveDone = true
      next(stepper)
    }


  ngOnInit(): void {
    
    
  
    this.campusComponent = DefaultCampusComponent;

    this.surveyForm = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });

    if (this.eventEmitterService.subsVar === undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeFirstComponentFunction.subscribe((faculty: string) => {
          this.assignFaculty(faculty);
        });
    }

    if (this.eventEmitterService.subsVar2 === undefined) {
      this.eventEmitterService.subsVar2 = this.eventEmitterService.
        invokeFirstComponentFunction2.subscribe((survey: string) => {
          this.assignSurvey(survey);
        });
    }

  }

  // tslint:disable-next-line: typedef
  assignComponent(component: string) {
    if (component === 'arcadia') { this.campusComponent = ArcadiaComponent; }
    else if (component === 'arts') { this.campusComponent = ArtsComponent; }
    else if (component === 'emalahleni') { this.campusComponent = EmalahleniComponent; }
    else if (component === 'garankuwa') { this.campusComponent = RankuwaComponent; }
    else if (component === 'mbombela') { this.campusComponent = MbombelaComponent; }
    else if (component === 'polokwane') { this.campusComponent = PlkComponent; }
    else if (component === 'pretoria') { this.campusComponent = PtaComponent; }
    else if (component === 'sosh-south') { this.campusComponent = SoshSouthComponent; }
    else { this.campusComponent = SoshNorthComponent; }
  }


  // tslint:disable-next-line: typedef
  assignFaculty(faculty: string){
    if (faculty === 'ict') this.facultyComponent = FacultyComponent;
    else if (faculty === 'economics') this.facultyComponent = EconomicsComponent;
    else if (faculty === 'economics-mbombela') this.facultyComponent = EconomicsMbombelaComponent;
    else if (faculty === 'economics-plk') this.facultyComponent = EconomicsPlkComponent;
    else if (faculty === 'engineering') this.facultyComponent = EngineeringComponent;
    else if (faculty === 'engineering-em') this.facultyComponent = EngineeringEmalahleniComponent;
    else if (faculty === 'forats') this.facultyComponent = FoartsComponent;
    else if (faculty === 'humanities') this.facultyComponent = HumanitiesComponent;
    else if (faculty === 'humanities-em') this.facultyComponent = HumanitiesEmalahleniComponent;
    else if (faculty === 'humanities-north') this.facultyComponent = HumanitiesNorthComponent;
    else if (faculty === 'humanities-plk') this.facultyComponent = HumanitiesPlkComponent;
    else if (faculty === 'ict-em') this.facultyComponent = IctEmalahleniComponent;
    else if (faculty === 'ict-plk') this.facultyComponent = IctPlkComponent;
    else if (faculty === 'man-science-plk') this.facultyComponent = ManSciencePlkComponent;
    else if (faculty === 'man-science') this.facultyComponent = ManagementComponent;
    else if (faculty === 'man-science-em') this.facultyComponent = ManagementEmalahleniComponent;
    else if (faculty === 'humanities-mbo') this.facultyComponent = MbombelaHumanitiesComponent;
    else if (faculty === 'science-mbo') this.facultyComponent = MbombelaManScienceComponent; 
    else if (faculty === 'science') this.facultyComponent = ScienceComponent;
    else { this.facultyComponent = SciencePtaComponent; }

  }


  // tslint:disable-next-line: typedef
  assignSurvey(survey: string){
    if (survey === 'ict-survey') { this.surveyComponent = IctSurveyComponent; }
    else if (survey === 'economics-survey') { this.surveyComponent = EconomicsSurveyComponent; }
    else if (survey === 'economics-mbombela-survey') { this.surveyComponent = EconomicsMbombelaSurveyComponent; }
    else if (survey === 'economics-plk-survey') { this.surveyComponent = EconomicsPlkSurveyComponent; }
    else if (survey === 'engineering-survey') { this.surveyComponent = EngineeringSurveyComponent; }
    else if (survey === 'engineering-em-survey') { this.surveyComponent = EngineeringEmalahleniSurveyComponent; }
    else if (survey === 'forats-survey') { this.surveyComponent = ArtsSurveyComponent; }
    else if (survey === 'humanities-survey') { this.surveyComponent = HumanitiesSurveyComponent; }
    else if (survey === 'humanities-em-survey') { this.surveyComponent = HumanitiesEmalahleniSurveyComponent; }
    else if (survey === 'humanities-north-survey') { this.surveyComponent = HumanitiesNorthSurveyComponent; }
    else if (survey === 'humanities-plk-survey') { this.surveyComponent = HumanitiesPlkSurveyComponent; }
    else if (survey === 'ict-em-survey') { this.surveyComponent = IctEmalahleniSurveyComponent; }
    else if (survey === 'ict-plk-survey-survey') { this.surveyComponent = IctPlkSurveyComponent; }
    else if (survey === 'man-science-plk-survey') { this.surveyComponent = ManSciencePlkSurveyComponent; }
    else if (survey === 'man-science-survey') { this.surveyComponent = ManagementSurveyComponent; }
    else if (survey === 'man-science-em-survey') { this.surveyComponent = ManagementEmalahleniSurveyComponent; }
    else if (survey === 'humanities-mbo-survey') { this.surveyComponent = MbombelaHumanitiesSurveyComponent; }
    else if (survey === 'science-mbo-survey') { this.surveyComponent = MbombelaManScienceSurveyComponent; }
    else if (survey === 'science-survey') { this.surveyComponent = ScienceSurveyComponent; }
    else if (survey === 'science-pta-survey') { this.surveyComponent = SciencePtaSurveyComponent; }
    else { this.surveyComponent = ArtsSurveyComponent; }

  }

  /*

  submitSurvey()
  {
    this._userService.submitSurvey(this.surveyData).subscribe(
    data =>
      console.log(data));
      console.log(this.surveyData.name);
      console.log(this.surveyData.cellNum);
      console.log(this.surveyData.faculty);
      console.log(this.surveyData.question1);
      console.log(this.surveyData.question2);
      console.log(this.surveyData.question3);
      console.log(this.surveyData.question4);
      console.log(this.surveyData.question5);
      console.log(this.surveyData.question6);
      console.log(this.surveyData.question7);
      console.log(this.surveyData.question8);
      console.log(this.surveyData.question9);

  }
*/

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

  

}

function next(stepper: MatStepper) {
    
    setTimeout(() => {
      stepper.next()
    }, 20);
}
