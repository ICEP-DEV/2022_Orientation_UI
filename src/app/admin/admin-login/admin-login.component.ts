import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router';
import { UserService } from "../../user.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loading = false;
  email : string = '';
  password : string = '';
  message : string = ''
  isOpen : boolean = false;

  constructor(private _userService: UserService, 
    private router: Router,
    private cookieService: CookieService,
    private toast : ToastrService) { }

  ngOnInit(): void {
  }
  fogotClicked()
  {
    this.router.navigate(['forgotten'])
  }
  login() {
    if (this.email === '') {
      this.toast.error('Please enter email');
      return;
    }

    if (this.password === '') {
      this.toast.error('Please enter password');
      return;
    }
    
    this._userService.loginAdmin({"email":this.email, "password":this.password}).subscribe(async(result)=>{
          if(result.error == false)
          {
            this.cookieService.set("userEmail_A",result.data[0].email)
            this.router.navigate(['dashboard'])
          }
          else
          {
            this.toast.warning(result.message)
          }
      })
  }

}