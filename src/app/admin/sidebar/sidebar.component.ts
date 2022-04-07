import { Component, OnInit } from '@angular/core';
import { SocketioService } from './../../socketio.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
     private _socketConnection : SocketioService,
     private _router : Router
  ) { }
  classNameNav : string[] = ["nav-item","nav-item","nav-item","nav-item","nav-item"]

  ngOnInit(): void {
    
  }

  navLinkHandle(index : number,route : string)
  {
      
      this.classNameNav[index] = "nav-item active"
      this._router.navigate([route])
  }

}
