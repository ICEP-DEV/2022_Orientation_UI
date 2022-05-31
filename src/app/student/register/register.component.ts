import { Component, OnInit,Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from './../../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { SocketioService } from './../../socketio.service'
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
  stepThree : boolean =false;
  policy : boolean = false;
  tutEmail : string = '@tut4life.ac.za';
  bindendEmail : string ='';


  isSignedIn = false

  constructor(private _userService: UserService, 
              private router: Router,
              private cookieService: CookieService,
              private toast : ToastrService,
              private _socketConnection: SocketioService) { }
  ngOnInit(): void {
    
  }
  readPolicy(){
    this.stepThree = true;

  }
  back(){
    this.stepThree = false;
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
    //this.email = this.studNum.concat(this.tutEmail)
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
      this.toast.info('Please enter password','Information');
      return;
    }
    
    if(this.password != this.password2)
    {
      this.toast.info('Confirm password does not match','Information');
      return;
    }

    if(this.password.length > 26) {
      this.toast.error('Password is too long','Error');
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
    if(!(/[!@#$%*]/).test(this.password))
    {
      this.toast.error('Password must have atleast One special characters','Error');
      return;
    }
     if(!(/[0-9]/).test(this.password))
    {
          this.toast.error('Password must have atleast One number','Error')
          return;
    }
    if(! (/[a-z]/).test(this.password) )
    {
          this.toast.error('Password must have atleast One Lowercase','Error')
          return;
    }
    if(! (/[A-Z]/).test(this.password) )
    {
          this.toast.error('Password must have atleast One Uppercase','Error')
          return;
    }
  
    if(! (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})/).test(this.email))
    {
          this.toast.error('Invalid email','Error')
          return;
    }
    let element = <HTMLInputElement> document.getElementById("policy");  
    if (element.checked){
      console.log("selected")
    }
    else{
      this.toast.warning('Please check the checkbox bofore you proceed ');
      return;
    }
    this.otp = generateRandomNumber().toString()

    this._userService.sendOTP({"otp":this.otp,"email":this.email}).subscribe((result)=>{
      if(!result.error)
      {     
        this.toast.success('OTP was sent succesfully','Success');
      }
      else
      {
        this.toast.error("Couldn't send the email to your please try again",'Oops')
        console.log(result.message)
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
        this.cookieService.set("fname", this.firstName)
        this.cookieService.set("lname", this.lastName)
        this.cookieService.set("userEmail",this.email)
        this._userService.logActivity({"useremail":this.email, "activity":"Registered"}).subscribe(()=>{})
        this._socketConnection.socket.emit('RegisteredUsers_soc')
        this._socketConnection.socket.emit('LoggedInUsers_soc')
        this.router.navigate([''])
        console.log (this.email)
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
