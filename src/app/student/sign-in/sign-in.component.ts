import { Component, OnInit, Output, EventEmitter, ViewChild,Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router';
import { UserService } from "../../user.service";
import { SocketioService } from './../../socketio.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  [x: string]: any;

  

  email : string = '';
  password : string = '';
  message : string = ''
  isOpen : boolean = false;
 
 
  
  constructor(private _userService: UserService, 
    private router: Router,
    private cookieService: CookieService,
    private toast: ToastrService ,
    private _socketConnection : SocketioService) { }


  ngOnInit(): void {
   
  }
  fogotClicked()
  {
    this.router.navigate(['forgotten'])
  }

  login() {
    if (this.email === '') {
      this.toast.info('Please enter email', 'Notification');
      return;
    }

    if (this.password === '') {
      this.toast.info('Please enter password', 'Notification');
      return;
    }
    
    this._userService.getStudents({"email":this.email /*+ "@tut4life.ac.za"*/, "password":this.password}).subscribe( async(result)=>{
          if(result.error == false)
          {
            this.cookieService.set("fname",result.data[0].firstname)
            this.cookieService.set("lname",result.data[0].lastname)
            this.cookieService.set("userEmail",result.data[0].email)
            
            
            this._userService.logActivity({"useremail":this.email, "activity":"Logged in"}).subscribe()
            this._socketConnection.socket.emit('LoggedInUsers_soc')
            this._socketConnection.socket.emit('LineGraph_update')
      
            this.router.navigate([''],{queryParams:{}})
           
            
          }
          else
          {
            this.toast.error(result.message, 'Error');
          }
      })
  }

  
}
