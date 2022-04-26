import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private _cookiesService : CookieService, private router: Router) { }

  @Output() isLogout = new EventEmitter<void>()


  ngOnInit(): void {
  }

  logout(){
    this._cookiesService.remove('userEmail')
    this.isLogout.emit();
    this.router.navigate(['home']);
  }


}
