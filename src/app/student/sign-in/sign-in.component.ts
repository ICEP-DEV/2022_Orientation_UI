import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from "../../user.service";
 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  [x: string]: any;

  

  email : string = '';
  password : string = '';

  
  constructor(private _userService: UserService, private router: Router) { }


  ngOnInit(): void {
   
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
    this._userService.getStudents({"email":this.email, "password":this.password}).subscribe((result)=>{
        console.log(result)
          if(result.error == false)
          {
            this.router.navigate(['campus'])
          }
          else
          {
            alert(result.message)
          }
      })
  }

  
}
