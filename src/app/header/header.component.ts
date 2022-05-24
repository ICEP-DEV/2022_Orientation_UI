import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() public loggedin :string ="";

  constructor(
    private router: Router) { }

  @Output() isLogout = new EventEmitter<void>()


  ngOnInit(): void {
    console.log(this.loggedin)
  }

  logout(){

  }


}
