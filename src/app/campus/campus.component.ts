import { Component, OnInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { OrientationService } from "../orientation.service"
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { SocketioService } from '../socketio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MapdirComponent } from '../student/mapdir/mapdir.component';
import { MeeteamComponent } from '../student/meeteam/meeteam.component';


@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})


export class CampusComponent implements OnInit {
  isLinear = true;
  usernames =""
  userEmail =""

  public astepper:any
  

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

  //surveyQuestions
  baseSurveyQuestions:any[] = [];

  //surveyAnswers
  baseSurveyAnswers:any[] = [];

  //surveyQuestion and users answers
  _surveyQueAnsTemp:any[] = []
  surveyQueAnsUser:any={}
  
  //Orientation Values
  //
  campusSelected : number = -1;
  facultySelected : number = -1;
  //
  campusNameSelected : string = ""
  campusUISELECT:any[] = []
  facultyNameSelected : string = ""
  facultyUISELECT:any[]=[]

  //Videos Control 
  watchedVideos:number[]=[]  

  //Saved Progress Values
  orientation_sav : any = {}
  survey_sav : any = {}
  progressbarVal:number = 0

  public url : string = '';


  //Constructor
  constructor(
    public _orientation : OrientationService, 
    private _cookiesService : CookieService,
    private _userService : UserService,
    private _router: Router,
    private _socketConnection : SocketioService,
    private _snackBar: MatSnackBar,
    private _bottomSheet: MatBottomSheet
    
  ) {

    this.userEmail = this._cookiesService.get("userEmail")

    if(!this.userEmail)
    {
      this._router.navigate(['home'])
    }
      this.usernames = this._cookiesService.get("fname")+" "+this._cookiesService.get("lname")
      this.url = "http://localhost/pdfrender/temmp.php?firstname="+this._cookiesService.get("fname")+"&lastname="+this._cookiesService.get("lname")+""
      this._orientation.getCampuses().subscribe((result)=>{
      this.allCampuses = result.data
    })
    
  }

  //Ng Initializer Method
  ngOnInit(): void {
    setTimeout(async() => {
      await this.loadSavedProgress()
    }, 500);
    
  }

  async loadSavedProgress()
  {
    this._orientation.GetOrientaionAnswer({"useremail":this.userEmail}).subscribe(async (result)=>{
      this.orientation_sav = result.data

      //Restore for step One+++++++++++++++++++++++++++++++++++++++++++++++++++++
      for (let index = 0; index < this.orientation_sav.length; index++) {
        if(this.orientation_sav[index].field == "StartOrientation")
        {
          if(this.orientation_sav[index].value == 'true')
          {
            this.StepOne(this.astepper)
            break;
          }
        }
      }
     
      //Restore for step Two+++++++++++++++++++++++++++++++++++++++++++++++++++++
      for (let index = 0; index < this.orientation_sav.length; index++) {
        if(this.orientation_sav[index].field == "Campus")
        {
          this.campusNameSelected = this.orientation_sav[index].value

          for (let x = 0; x < this.allCampuses.length; x++) {
              if(this.allCampuses[x].campus_name == this.campusNameSelected)
              {
                this.campusUISELECT[this.allCampuses[x].id - 1]=true
                this.campClick(this.allCampuses[x].id,this.orientation_sav[index].value).then(async ()=>{
                  this.StepTwo(this.astepper)


                  for (let index = 0; index < this.orientation_sav.length; index++) {
                    if(this.orientation_sav[index].field == "Faculty")
                    {
                      this.facultyNameSelected = this.orientation_sav[index].value
                      
            
                      for (let x = 0; x < this.baseFaculties.length; x++) {
                          if(this.baseFaculties[x].faculty_name == this.facultyNameSelected)
                          {
                            this.facultyUISELECT[x]=true
                            this.facClick(this.baseFaculties[x].id,this.facultyNameSelected).then(async ()=>{
                              this.StepThree(this.astepper)

                              for (let index = 0; index < this.orientation_sav.length; index++) {
                                if(this.orientation_sav[index].field == "Videos")
                                {
                                  this.onPlayVideo(1)
                                  this.onPlayVideo(2)
                                  this.StepFour(this.astepper)
                                  break;
                                } 
                              }
                             
                              for (let index = 0; index < this.orientation_sav.length; index++) {
                                if(this.orientation_sav[index].field == "Survey")
                                {
                                    await this._orientation.GetSurveyAnswer({"useremail":this.userEmail}).toPromise().then((result)=>{
                                       for (let index = 0; index < result.data.length; index++) {
                                           this.baseSurveyAnswers[index] = result.data[index].answer            
                                       }    
                                    })
                                    this.StepFive(this.astepper,true)
                                    break;
                                }    
                              }
                            })   
                            break;
                          } 
                      }
                      break;
                    }
                  }
                })           
                break;
              } 
          }
          break;
        }
      }


      //Restore for step Three+++++++++++++++++++++++++++++++++++++++++++++++++++++
      







    })

  }

  focus(stepper : MatStepper){
    this.astepper = stepper
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
    if(this.watchedVideos.length < 2)
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
  StepFive(stepper : MatStepper,saved : boolean)
  {

    //Checking Whether Survey is fully completed

      //checking they are equal  
      if(!saved)  
      if(this.baseSurveyAnswers.length !== this.baseSurveyQuestions.length)
      {
          alert("Please answer every question from the survey")
          return
      }

      for (let index = 0; index < this.baseSurveyAnswers.length; index++) {
        if(!this.baseSurveyAnswers[index])
        {
          alert("Please answer every question from the survey 2")
          return
        } 
      }



    for (let index = 0; index < this.baseSurveyQuestions.length; index++) {
      this._surveyQueAnsTemp[index] = {
            "answer":this.baseSurveyAnswers[index],
            "question":this.baseSurveyQuestions[index].question_id
          } 
    }

    this.surveyQueAnsUser = {
      "useremail":this.userEmail,
      "survey":this._surveyQueAnsTemp
    }

    

     //Activity Loging to database
    this._userService.logActivity({"useremail":this.userEmail, "activity":"On Step Five"}).subscribe(()=>{})

     //Storing the users faculty choice
    this._orientation.Store_Steps({"useremail":this.userEmail,"field":"Survey","value":"true"})
     .subscribe((result)=>{
       if(result.error) throw result.message
       if(!result.error)
       {
        this._orientation.StoreSurveyAnswers(this.surveyQueAnsUser).subscribe((result)=>{
          if(!result.error)
          {
            this._socketConnection.socket.emit("Add_Survey_soc")
          }
        })
       }
    })
 

    //Updating the progress of the user
    this._orientation.UpdateProgress({"email":this.userEmail,"progress":5})
    .subscribe((result)=>{
      if(result.error) throw result.message
    })
    

    this.stepFiveComplete = true
    next(stepper)
  }
  //------------------------------------------------------------------Step Sive Restart Button Click
  StepSix(stepper : MatStepper)
  {
    if(confirm("Are you sure you want to restart the orientaion all your saves will be lost ?"))
    {
      //Updating the progress of the user
      this._orientation.UpdateProgress({"email":this.userEmail,"progress":0})
      .subscribe((result)=>{
        if(result.error) throw result.message
      })

      this._orientation.DelCustomeSaved({"useremail":this.userEmail,"delete":"all"})
      .subscribe(()=>{
        this._socketConnection.socket.emit("Add_Survey_soc")
      })
      
      this._userService.logActivity({"useremail":this.userEmail, "activity":"Restared the Orientation"}).subscribe(()=>{})

        //Storing the users faculty choice
      this._orientation.Store_Steps({"useremail":this.userEmail,"field":"Initialize","value":"true"})
      .subscribe((result)=>{
        if(result.error) throw result.message
      })
      
      this.baseSurveyAnswers = []
        
      this.progressbarVal =0
      this.stepOneComplete = false;
      stepper.reset()
    }
  }


  //Click of Each Dynamical componet
   //========================Campus button click
  async campClick(id : number, campName : string)
  {
    
    this.baseSurveyAnswers =[]
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Campus clicked"}).subscribe(()=>{})
    this.campusSelected = id;
    this.campusNameSelected = campName
    this.facultySelected = -1;
    this.watchedVideos = []
    this.stepTwoComplete = false;
    this.stepThreeComplete = false;
    this.stepFourComplete = false;
    this.stepFiveComplete = false;

    this.progressbarVal = 20
    await this._orientation.getFaculty(this.campusSelected.toString()).toPromise().then((result)=>{
      this.baseFaculties = result.data
    })
  }
  //========================Faculty button click
  async facClick(id : number,facName : string)
  {
      this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Faculty clicked"}).subscribe(()=>{})
      this.facultySelected = id
      this.facultyNameSelected = facName
      this.stepThreeComplete = false;
      this.stepFourComplete = false;
      this.stepFiveComplete = false;
      this.baseSurveyAnswers =[]

    
      this.progressbarVal = 40
      await this._orientation.getVideos(this.facultySelected.toString()).toPromise().then((result)=>{
        this.videosData = result.data
      })

      await this._orientation.getSurvQuestion(this.facultySelected.toString()).toPromise().then((result)=>{
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
        this.progressbarVal = 50
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
    this._router.navigate(['home'])
  }

  //Navigation To Blog
  blog(){
    this._userService.logActivity({"useremail":this._cookiesService.get("userEmail"), "activity":"Blog clicked"}).subscribe(()=>{})
    this._router.navigate(['blog'])
  } 

  changeSection($event : any)
  {
     // console.log($event)
    if($event.selectedIndex == 1)
    if(this.baseSurveyAnswers.length > 0)
    //alert("Cation!! Looks like you have started with the survey if you change the campus you will loose your progress")
    this._snackBar.open("If you change the campus you will loose your survey progress","Cation!",{duration:5000});
    
    if($event.selectedIndex == 2)
    if(this.baseSurveyAnswers.length > 0)
    //alert("Cation!! Looks like you have started with the survey if you change the faculty you will loose your progress")
    this._snackBar.open("If you change the faculty you will loose your survey progress","Cation!",{duration:5000});

    if($event.selectedIndex == 0)
      this.progressbarVal =0
    

    if($event.selectedIndex == 1)
      this.progressbarVal = 10
    

    if($event.selectedIndex == 2) 
      this.progressbarVal =30
     

    if($event.selectedIndex == 3)
      this.progressbarVal =40
    

    if($event.selectedIndex == 4) 
      this.progressbarVal =60
    

    if($event.selectedIndex == 5)
      this.progressbarVal =100
   
  }

  campDirection()
  {
    this._bottomSheet.open(MapdirComponent);
  }

  meeteam()
  {
    this._bottomSheet.open(MeeteamComponent)
  }
}

//Delay of nextstep
function next(stepper : MatStepper)
{
      setTimeout(() => {
          stepper.next()
      }, 20);
}

