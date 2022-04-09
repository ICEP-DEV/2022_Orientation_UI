import { Component, OnInit, Output, EventEmitter, ViewChild,Input } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { UserService } from "../../user.service";
import { SocketioService } from './../../socketio.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  [x: string]: any;

  

  email : string = '';
  password : string = '';
  message : string = 'Cebolenkosi'
  isOpen : boolean = false;
 
 
  
  constructor(private _userService: UserService, 
    private router: Router,
    private cookieService: CookieService,
    private _socketConnection : SocketioService) { }


  ngOnInit(): void {
   
  }
  fogotClicked()
  {
    this.router.navigate(['forgotten'])
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
    
    this._userService.getStudents({"email":this.email, "password":this.password}).subscribe(async(result)=>{
          if(result.error == false)
          {
            this.cookieService.put("fname",result.data[0].firstname,{secure:true,sameSite:"strict"})
            this.cookieService.put("lname",result.data[0].lastname,{secure:true,sameSite:"strict"})
            this.cookieService.put("userEmail",result.data[0].email,{secure:true,sameSite:"strict"})
            this._userService.logActivity({"useremail":this.email, "activity":"Logged in"}).subscribe()
            this._socketConnection.socket.emit('LoggedInUsers_soc')
            this.router.navigate([''])
          }
          else
          {
            alert(result.message)
          }
      })
  }

  
}
