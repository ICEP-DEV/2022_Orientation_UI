import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { OrientationService } from "../orientation.service"
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})


export class CampusComponent implements OnInit {
  isLinear = true;
  usernames =""

  //Step Completed Controllers
  stepOneComplete: boolean = false;
  stepTwoComplete: boolean = false;
  stepThreeComplete: boolean = false;
  stepFourComplete: boolean = false;
  stepFiveComplete: boolean = false;

  //Orientaion Full Data
  allCampuses:any[] = []
  baseFaculties:any[] = []
  categories:any[] = []
  videosData:any[] = [];
  baseSurveyQuestions:any[] = [];
  
  //Orientation Values
  //
  campusSelected : number = -1;
  facultySelected : number = -1;
  //
  campusNameSelected : string = ""
  facultyNameSelected : string = ""


 
  
  


  //Constructor
  constructor(
    public _orientation : OrientationService, 
    private _cookiesService : CookieService,
    private _userService : UserService,
    private router: Router,
    private _socketConnection : SocketioService
  ) {

    if(!this._cookiesService.get("userEmail"))
    {
      this.router.navigate(['home'])
    }
      this.usernames = this._cookiesService.get("fname")+" "+this._cookiesService.get("lname")

      this._orientation.getCampuses().subscribe((result)=>{
      this.allCampuses = result.data
    })
  }

  //Ng Initializer Method
  ngOnInit(): void {
   
  }


  //------------------------------------------------------------------Step One Next Button Click
  StepOne(stepper : MatStepper)
  {
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"On Step One"}).subscribe(()=>{})
    this.stepOneComplete = true
    next(stepper)
  } 
  //------------------------------------------------------------------Step Two Next Button Click
  StepTwo(stepper : MatStepper)
  {
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"On Step Two"}).subscribe(()=>{})
    if(this.campusSelected == -1)
    {
      alert("Please select a campus before trying to procceed")
      return
    }

    

    this.stepTwoComplete = true
    next(stepper)
  }
  //------------------------------------------------------------------Step Three Next Button Click
  StepThree(stepper : MatStepper)
  {
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"On Step Three"}).subscribe(()=>{})
    if(this.facultySelected == -1)
    {
      alert("Please select a faculty before trying to procceed")
      return
    }

    this.stepThreeComplete = true
    next(stepper)
  }
  //------------------------------------------------------------------Step Four Next Button Click
  StepFour(stepper : MatStepper)
  {
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"On Step Four"}).subscribe(()=>{})
    this.stepFourComplete = true
    next(stepper)
  }
  //------------------------------------------------------------------Step Five Next Button Click
  StepFive(stepper : MatStepper)
  {
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"On Step Five"}).subscribe(()=>{})
    this.stepFiveComplete = true
    next(stepper)
  }
  
  StepSix(stepper : MatStepper)
  {
    this.stepOneComplete = false;
    stepper.reset()
  }


  //Click of Each Dynamical componet
   //========================Campus button click
  campClick(id : number, campName : string)
  {
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Campus clicked"}).subscribe(()=>{})
    this.campusSelected = id;
    this.campusNameSelected = campName
    this.facultySelected = -1;
    this.stepTwoComplete = false;
    this.stepThreeComplete = false;
    this.stepFourComplete = false;
    this.stepFiveComplete = false;

    this._orientation.getFaculty(this.campusSelected.toString()).subscribe((result)=>{
      this.baseFaculties = result.data
    })
  }
  //========================Faculty button click
  facClick(id : number,facName : string)
  {
      this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Faculty clicked"}).subscribe(()=>{})
      this.facultySelected = id
      this.facultyNameSelected = facName
      this.stepThreeComplete = false;
      this.stepFourComplete = false;
      this.stepFiveComplete = false;

      this._orientation.getVideos(this.facultySelected.toString()).subscribe((result)=>{
        this.videosData = result.data
      })

      this._orientation.getSurvQuestion(this.facultySelected.toString()).subscribe((result)=>{
        this.baseSurveyQuestions = result.data
      })
  }

  //=======================Other event Handles
  onPlayVideo($event : any)
  { 
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Video played"}).subscribe(()=>{})
  }
  logout(){
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Logged out"}).subscribe(()=>{})
    this._cookiesService.remove('userEmail')
    this._cookiesService.remove('lname')
    this._cookiesService.remove('fname')
    this._socketConnection.socket.emit('LoggedOutUsers_soc')
    this.router.navigate(['home'])
  }
  blog(){
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Blog clicked"}).subscribe(()=>{})
    this.router.navigate(['blog'])
  }
}

//
function next(stepper : MatStepper)
{
      setTimeout(() => {
          stepper.next()
      }, 20);
}