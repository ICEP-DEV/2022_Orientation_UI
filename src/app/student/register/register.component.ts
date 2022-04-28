import { Component, OnInit,Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from './../../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { SocketioService } from './../../socketio.service';
import { ToastrService } from 'ngx-toastr';

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

  studNum : string ='';
  firstName : string = '';
  lastName : string = '';
  email : string = '';
  password : string = '';
  password2 : string = '';
  otpField : string = '';
  otp : string = '';
  stepTwo : boolean = false;



  isSignedIn = false

  constructor(private _userService: UserService, 
              private router: Router,
              private toast : ToastrService,
              private cookieService: CookieService,
              private _socketConnection: SocketioService) { }
  ngOnInit(): void {
    
  }

  sendOTP()
  {
    if(this.studNum == '') {
      this.toast.warning('Please enter your student number');
      return;
    }
   
    if(this.firstName == '') {
      this.toast.warning('Please enter your first name');
      return;
    }
    if(this.lastName == '') {
      this.toast.warning('Please enter your last name');
      return;
    }
    if(this.email == '') {
      this.toast.info('Please enter email','Information');
      return;
    }

    this._userService.checkStudent({"email":this.email}).subscribe((result)=>{
      if(this.studNum.length < 9) {
        this.toast.error('Student number is too short','Error');
        return;
      }
      else if(this.studNum.length > 9)
      {
        this.toast.error('Student number too long','Error');
      }
      if(!result.error)
      {
        
        this.toast.error('Email already exist','Error');
        return;
      }
    
    if(this.password == '') {
      
      this.toast.info('Please enter email','Information');
      return;
    }
    
    if(this.password != this.password2)
    {
      
      this.toast.info('Confirm password does not match','Information');
      return;
    }

    if(this.password.length > 26) {
      
      this.toast.error('Email already exist','Error');
      return;
    }
    
    if(this.password.length < 6) {
      
      this.toast.error('Password is too short','Error');
      return;
    }

    if(this.password == "123456") {
      
      this.toast.info('Password is too weak','Notice');
      return;
    }
    


    this.otp = generateRandomNumber().toString()

    this._userService.sendOTP({"otp":this.otp,"email":this.email}).subscribe((result)=>{
      if(result == null)
      {
        this.toast.success('OTP was sent succesfully','Success');
        console.log("OTP was sent succesfully")
      }
    })

    this.stepTwo = true;
    })
  }

  register() {
    
    if(this.otp != this.otpField)
    {
      
      this.toast.error('OTP is incorrect','Error');
      return;
    }

    this._userService.regStudent({"password":this.password,"studNum":this.studNum,"fname": this.firstName, "lname" : this.lastName,"email":this.email}).subscribe((result)=>{
      if(result.error == false)
      {
        this.cookieService.put("fname", this.firstName,{secure:true,sameSite:"strict"})
        this.cookieService.put("lname", this.lastName,{secure:true,sameSite:"strict"})
        this.cookieService.put("userEmail",this.email,{secure:true,sameSite:"strict"})
        this._userService.logActivity({"useremail":this.email, "activity":"Registered"}).subscribe(()=>{})
        this._socketConnection.socket.emit('RegisteredUsers_soc')
        this._socketConnection.socket.emit('LoggedInUsers_soc')
        this.router.navigate([''])
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
