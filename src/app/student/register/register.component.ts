import { Component, OnInit,Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from './../../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  @ViewChild('myForm')
  form!: NgForm;
  error: any;

  email : string = '';
  password : string = '';
  password2 : string = '';
  otpField : string = '';
  otp : string = '';
  stepTwo : boolean = false;



  isSignedIn = false

  constructor(private _userService: UserService, private router: Router,private cookieService: CookieService) { }

  ngOnInit(): void {

  }

  sendOTP()
  {
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    this._userService.checkStudent({"email":this.email}).subscribe((result)=>{
      if(!result.error)
      {
        alert("Email already exist");
        return;
      }
    

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    
    if(this.password != this.password2)
    {
      alert('Confirm password does not match');
      return;
    }

    if(this.password.length > 26) {
      alert('Password is too long');
      return;
    }
    
    if(this.password.length < 6) {
      alert('Password is too short');
      return;
    }

    if(this.password == "123456") {
      alert('Password is too easy');
      return;
    }
    


    this.otp = generateRandomNumber().toString()

    this._userService.sendOTP({"otp":this.otp,"email":this.email}).subscribe((result)=>{
      if(result == null)
      {
        console.log("OTP was sent succesfully")
      }
    })

    this.stepTwo = true;
    })
  }

  register() {
    
    if(this.otp != this.otpField)
    {
      alert('OTP is incorrect');
      return;
    }

    this._userService.regStudent({"password":this.password,"studNum":"NULL","email":this.email}).subscribe((result)=>{
      if(result.error == false)
      {
        this.cookieService.put("userEmail",this.email,{secure:true,sameSite:"strict"})
        this.router.navigate(['campus'])
      }
      else
      {
        console.log(result.message)
      }
    })


  }

  removeError() {
    this.error = null;
  }

}


function generateRandomNumber() {
  var minm = 100000;
  var maxm = 999999;
  return Math.floor(Math
  .random() * (maxm - minm + 1)) + minm;
}
