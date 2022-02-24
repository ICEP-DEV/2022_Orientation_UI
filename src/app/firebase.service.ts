import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth,  } from  "@angular/fire/auth";
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false
  constructor(public firebaseAuth :AngularFireAuth,
     private router : Router, private angularFireAuth: AngularFireAuth) { }
     
  /*async signin(email:string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }*/

  /*async signup(email:string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }*/
  
  /*logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }*/

  // login method
  login(email : string, password : string) {
    this.firebaseAuth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');

        if(res.user?.emailVerified == true) {
          this.router.navigate(['/campus']);
        } else {
          this.router.navigate(['/verify']);
        }

    }, err => {
        alert(err.message);
        this.router.navigate(['/student-login']);
    })
  }

  // register method
  register(email : string, password : string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/student-login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/student-reg']);
    })
  }

  // sign out
  logout() {
    this.firebaseAuth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  // forgot password
  forgotPassword(email : string) {
    this.firebaseAuth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify']);
    }, err => {
      alert('Something went wrong');
    })
}

  sendEmailForVarification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/verify']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  
}
