import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  
  constructor(private _userService : UserService,
              private _router : Router,
              private toast : ToastrService) { }

  ngOnInit(): void {
  }
  nextHandle()
  {
    
    //Step One Entering of the email
    if(this.step == 1)
    {
        if(!this.email) 
        {
          this.toast.error('Please enter your email', 'Error')
          return
        }

        if(this.email.length < 3)
        {
          this.toast.error('Incorrect email', 'Error')
          return
        }

        this._userService.forgottenReq({email:this.email}).subscribe((result)=>{
          if(result.error)
          {
            this.toast.error(result.message)
            return;
          }

          this.otp = generateRandomNumber().toString()

          this._userService.sendOTP({"otp":this.otp,"email":this.email}).subscribe((result)=>{
              if(result == null)
              {
                this._userService.logActivity({"useremail":this.email, "activity":"Forgot otp"}).subscribe(()=>{})
                  this.toast.success('OTP was sent succesfully')
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
          this.toast.error('OTP is required')
          return;
        }
        if(this.otp != this.otpField)
        {      
          if(this.otpField.length != 6)
          {
            this.toast.info('The OTP expacted is 6 digit')
            return;
          }
          this.toast.info('Your OTP is incorrect make sure you are using the most recent OTP')
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
      this._userService.logActivity({"useremail":this.email, "activity":"succeedforgot"}).subscribe(()=>{})
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
