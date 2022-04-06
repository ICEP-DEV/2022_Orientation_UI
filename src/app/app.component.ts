import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { SocketioService } from './socketio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private usersService: UserService,
              private _socketConnection: SocketioService,
              )
  {
    this._socketConnection.socket.emit('Visitors_soc') 
  }

  ngOnInit(){
  
  }

 
  
}
