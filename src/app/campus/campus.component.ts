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
  userEmail =""

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

  //surveyAnswers
  baseSurveyAnswers:any[] = [];
  
  //Orientation Values
  //
  campusSelected : number = -1;
  facultySelected : number = -1;
  //
  campusNameSelected : string = ""
  facultyNameSelected : string = ""


 
  //Videos Control 
  watchedVideos:number[]=[]  

  


  //Constructor
  constructor(
    public _orientation : OrientationService, 
    private _cookiesService : CookieService,
    private _userService : UserService,
    private router: Router,
    private _socketConnection : SocketioService
  ) {

    this.userEmail = this._cookiesService.get("userEmail")

    if(!this.userEmail)
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
    this._userService.logActivity({"useremail":this.userEmail, "activity":"On Step One"}).subscribe(()=>{})
    this._orientation.Store_Steps({"useremail":this.userEmail,"field":"StartOrientation","value":"true"})
    .subscribe((result)=>{
      if(result.error) throw result.message
    })
    this._orientation.UpdateProgress({"email":this.userEmail,"progress":1})
    .subscribe((result)=>{
      if(result.error) throw result.message
    })

    this.stepOneComplete = true
    next(stepper)
  } 
  //------------------------------------------------------------------Step Two Next Button Click
  StepTwo(stepper : MatStepper)
  {
    
    if(this.campusSelected == -1)
    {
      alert("Please select a campus before trying to procceed")
      return
    }

    //Activity Loging to database
    this._userService.logActivity({"useremail":this.userEmail, "activity":"On Step Two"}).subscribe(()=>{})

    //Storing the users campus choice
    this._orientation.Store_Steps({"useremail":this.userEmail,"field":"Campus","value":this.campusNameSelected})
    .subscribe((result)=>{
      if(result.error) throw result.message
    })

    //Updating the progress of the user
    this._orientation.UpdateProgress({"email":this.userEmail,"progress":2})
    .subscribe((result)=>{
      if(result.error) throw result.message
    })    

    this.stepTwoComplete = true
    next(stepper)
  }
  //------------------------------------------------------------------Step Three Next Button Click
  StepThree(stepper : MatStepper)
  {
    //Checking whether is there a selected faculty
    if(this.facultySelected == -1)
    {
      alert("Please select a faculty before trying to procceed")
      return
    }

    //Activity Loging to database
    this._userService.logActivity({"useremail":this.userEmail, "activity":"On Step Three"}).subscribe(()=>{})

    //Storing the users faculty choice
    this._orientation.Store_Steps({"useremail":this.userEmail,"field":"Faculty","value":this.facultyNameSelected})
    .subscribe((result)=>{
      if(result.error) throw result.message
    })

    //Updating the progress of the user
    this._orientation.UpdateProgress({"email":this.userEmail,"progress":3})
    .subscribe((result)=>{
      if(result.error) throw result.message
    }) 

    this.stepThreeComplete = true
    next(stepper)
  }
  //------------------------------------------------------------------Step Four Next Button Click
  StepFour(stepper : MatStepper)
  {

    //Checking Wherether atleast 2 videos have been watched
    if(this.watchedVideos.length < 0)
    {
        alert("Please watch atleast two videos before proceeding")
        return
    }


    //Activity Loging to database
    this._userService.logActivity({"useremail":this.userEmail, "activity":"On Step Four"}).subscribe(()=>{})

    //Storing the users faculty choice
    this._orientation.Store_Steps({"useremail":this.userEmail,"field":"Videos","value":"true"})
    .subscribe((result)=>{
      if(result.error) throw result.message
    })

    //Updating the progress of the user
    this._orientation.UpdateProgress({"email":this.userEmail,"progress":4})
    .subscribe((result)=>{
      if(result.error) throw result.message
    })
    this.stepFourComplete = true
    next(stepper)
  }
  //------------------------------------------------------------------Step Five Next Button Click
  StepFive(stepper : MatStepper)
  {

    //Checking Whether Survey is fully completed

      //checking they are equal    
      if(this.baseSurveyAnswers.length !== this.baseSurveyQuestions.length)
      {
          alert("Please answer every question from the survey")
          return
      }

      for (let index = 0; index < this.baseSurveyAnswers.length; index++) {
        if(!this.baseSurveyAnswers[index])
        {
          alert("Please answer every question from the survey")
          return
        } 
      }


      
    

    //

    this._userService.logActivity({"useremail":this.userEmail, "activity":"On Step Five"}).subscribe(()=>{})
    this.stepFiveComplete = true
    next(stepper)
  }
  
  StepSix(stepper : MatStepper)
  {
    this._userService.logActivity({"useremail":this.userEmail, "activity":"Restared the Orientation"}).subscribe(()=>{})
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
    this.watchedVideos = []
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
      this.baseSurveyAnswers =[]

      this._orientation.getVideos(this.facultySelected.toString()).subscribe((result)=>{
        this.videosData = result.data
      })

      this._orientation.getSurvQuestion(this.facultySelected.toString()).subscribe((result)=>{
        this.baseSurveyQuestions = result.data
      })
  }

  //=======================Other event Handles
  onPlayVideo(videoid : any)
  { 
   
      if(this.watchedVideos.indexOf(videoid) != -1)
      {
        return;
      }
      else
      {
        this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Video played"}).subscribe(()=>{})
        this.watchedVideos.push(videoid)
      }
      
  }

  //Handle logging out
  logout(){
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Logged out"}).subscribe(()=>{})
    this._cookiesService.remove('userEmail')
    this._cookiesService.remove('lname')
    this._cookiesService.remove('fname')
    this._socketConnection.socket.emit('LoggedOutUsers_soc')
    this.router.navigate(['home'])
  }

  //Navigation To Blog
  blog(){
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Blog clicked"}).subscribe(()=>{})
    this.router.navigate(['blog'])
  }
}

//Dlay of nextstep
function next(stepper : MatStepper)
{
      setTimeout(() => {
          stepper.next()
      }, 20);
}