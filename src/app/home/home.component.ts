import { Component, OnInit } from '@angular/core';
//import * as Immutable from 'immutable';
import { SocketioService } from './../socketio.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  constructor(
    private _socketConnection : SocketioService
  ) { }

  ngOnInit(): void { 
    //countVisitors
    this._socketConnection.socket.emit("Visitors_soc")
  }

 

}
