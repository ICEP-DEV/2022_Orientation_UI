import { Component, OnInit,Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from './../../user.service';
import { FirebaseService } from '../../firebase.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth,  } from  "@angular/fire/auth";

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


  /*
  @Input() studentData = {
    studentNum: " ", password: " ", name:" ", surname: " ", course: " ", email: " ", phone: " ", assessment: " "
  }
*/
   
  /*@Input() studentData = {
    id: " " , email: " ", password: " ", studNum: " "
  }*/
  isSignedIn = false

  constructor(public firebaseAuth :AngularFireAuth, private _userService: UserService, public firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    /*if(localStorage.getItem('user')!== null)
    {
      this.isSignedIn= true
    }
    else
    {
      this.isSignedIn = false
    }*/
  }

  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.firebaseService.register(this.email,this.password);
    
    this.email = '';
    this.password = '';

  }

  /*async onSignup(emailSignup:string,passwordSignup:string){
    await this.firebaseService.signup(emailSignup,passwordSignup)
    .then( res => console.log(res) )
    .catch( err => this.error = err.message );
     this.form.reset();
    if(this.firebaseService.isLoggedIn)
    {
      this.isSignedIn = true;
      this.router.navigateByUrl('campus'); 
    }
  }*/

  removeError() {
    this.error = null;
  }


}
