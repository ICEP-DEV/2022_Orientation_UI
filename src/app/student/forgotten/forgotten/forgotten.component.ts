import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.component.html',
  styleUrls: ['./forgotten.component.css']
})
export class ForgottenComponent implements OnInit {

  public step : number = 1;
  public email : string ='';
  public otpField: string='';
  private otp : string = '';
  public password : string='';
  
  constructor(private _userService : UserService,private _router : Router) { }

  ngOnInit(): void {
  }
  nextHandle()
  {
    
    //Step One Entering of the email
    if(this.step == 1)
    {
        if(!this.email) 
        {
          alert("Please enter your email")
          return
        }

        if(this.email.length < 3)
        {
          alert("Incorrect email")
          return
        }

        this._userService.forgottenReq({email:this.email}).subscribe((result)=>{
          console.log(result)
          if(result.error)
          {
            alert(result.message)
            return;
          }

          this.otp = generateRandomNumber().toString()

          this._userService.sendOTP({"otp":this.otp,"email":this.email}).subscribe((result)=>{
              if(result == null)
              {
                  console.log("OTP was sent succesfully")
              }
          })
          this.step++;
        })  
        return
    }


    //Step Two Entering of the OTP
    if(this.step == 2)
    {

        if(!this.otpField)
        {
          alert("OTP is required")
          return;
        }
        if(this.otp != this.otpField)
        {
          
          if(this.otpField.length != 6)
          {
            alert("The OTP expacted is 6 digit")
            return;
          }
            alert("Your OTP is incorrect make sure you are using the most recent OTP")
          return;
        }
      
       this.step++;
        return

    }

    if(this.step == 3)
    {

      this._userService.forgottenReq({"newPassword":this.password,"email":this.email}).subscribe((result)=>{
        console.log(result)
      })
      this.step++;
      this._router.navigate(['student-login'])
      return
    }
 
  }

  prevHandle()
  {
    this.step--;
  }
}


function generateRandomNumber() {
  var minm = 100000;
  var maxm = 999999;
  return Math.floor(Math
  .random() * (maxm - minm + 1)) + minm;
}
