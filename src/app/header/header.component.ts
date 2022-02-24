import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private fb: FormBuilder, public firebaseService: FirebaseService, private router: Router) { }

  @Output() isLogout = new EventEmitter<void>()


  ngOnInit(): void {
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit();
    this.router.navigate(['']);
  }

  /*
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  } 
  */

}
