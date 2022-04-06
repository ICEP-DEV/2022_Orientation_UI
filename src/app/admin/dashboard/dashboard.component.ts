import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { SocketioService } from './../../socketio.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: number = 0;
  visitors: number = 0;
  videos:number =0;
  surveys:string ="";
  loggedIn:number=0;
  noOfSurvey:number = 0
  widthStyle:string ="width:0%";

  

  constructor(private usersService: UserService, 
    private _socketConnection: SocketioService,) 
  {
    _socketConnection.getStatsBatch({}).subscribe((result)=>
    {
      this.visitors = result.data[0].viewNumVisitors
      this.surveys = ((result.data[0].survey / result.data[0].countUsers) * 100).toFixed(0)
      this.noOfSurvey = result.data[0].survey
      this.widthStyle = "width:"+this.surveys+"%"
      this.videos = result.data[0].videoCounts
      this.students = result.data[0].countUsers
      this.loggedIn = result.data[0].loggedin
    })

  }

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
        this.surveys = ((instream / this.students) * 100).toFixed(0);
        this.noOfSurvey = instream
        this.widthStyle = "width:"+this.surveys+"%"
      })
      this._socketConnection.socket.on("countLoggedIn",(instream)=>{
        this.loggedIn = instream
      })
  }

}
