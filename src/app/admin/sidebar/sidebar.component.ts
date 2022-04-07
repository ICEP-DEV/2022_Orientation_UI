import { Component, OnInit } from '@angular/core';
import { SocketioService } from './../../socketio.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
     private _socketConnection : SocketioService
  ) { }
  classNameNav : string = "nav-link active"
  ngOnInit(): void {
    
  }

  navLinkHandle(index : number)
  {
    console.log('show')
  }

}
