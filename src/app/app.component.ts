import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kg-app-cicd';

  users: any = [];

  constructor(private usersService: UserService){}

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe((data: any) => this.users = data);
  }
 
}
