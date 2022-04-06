import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../../firebase.service';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  [x: string]: any;

  /*isSignedIn = false;
  @ViewChild('f')
  form!: NgForm;
  error: any;*/

  email : string = '';
  password : string = '';

  constructor(public firebaseService: FirebaseService, private router: Router, public afAuth: AngularFireAuth) { }
  /*
  registrationForm = this.fb.group(
    {
      studNum:['', [Validators.required]],
      password:['', Validators.required],
    }

  )*/

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

  login() {

    if (this.email === '') {
      alert('Please enter email');
      return;
    }

    if (this.password === '') {
      alert('Please enter password');
      return;
    }

    this.firebaseService.login(this.email, this.password);

    this.email = '';
    this.password = '';

  }

  /*async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    .then( res => console.log(res) )
    .catch( err => this.error = err.message )
    //this.form.reset();
    if(this.firebaseService.isLoggedIn)
    {
      this.isSignedIn = true;
      this.router.navigateByUrl('campus');
    }
  }

  removeError() {
    this.error = null;
  }*/

}
