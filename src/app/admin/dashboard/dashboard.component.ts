import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { SocketioService } from './../../socketio.service'
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: number = 0;
  visitors: number = 0;
  videos:number =0;
  surveys:number =0;

  

  constructor(private usersService: UserService,
              private _socketConnection: SocketioService) { }

  ngOnInit(): void {
      this._socketConnection.socket.on("countVisitors",(instream)=>{
          this.visitors = instream;
      })
      this._socketConnection.socket.on("countStudents",(instream)=>{
        this.students = instream;
      })
      this._socketConnection.socket.on("countVideos",(instream)=>{
        this.videos= instream;
      })
      this._socketConnection.socket.on("countSurveys",(instream)=>{
        this.surveys = instream;
      })
  }

}
