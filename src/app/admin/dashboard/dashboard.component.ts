import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { SocketioService } from './../../socketio.service'
import { Chart, registerables } from 'chart.js';

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
 
  //
  nowMonth : string = new Date().toDateString()
  chart: any = [];
  myPieChart:any = [];

  

  constructor(private usersService: UserService, 
    private _socketConnection: SocketioService,) 
  {
    Chart.register(...registerables)
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

      function dateShift(shift : number)
      {
        var now = new Date();
        var past = new Date(now)
        past.setDate(past.getDate() - shift)
        return past.getDate()
      }
      

        
      this.chart = new Chart('myAreaChart', {
        type: 'line',
        data: {
          labels: [dateShift(9), dateShift(8), dateShift(7), dateShift(6), dateShift(5), dateShift(4), dateShift(3), dateShift(2), dateShift(1), "Today"],
          datasets: [{
            label: "Logging In",
            backgroundColor: "#0d4794",
            borderColor: "#0d4794",
            pointRadius: 3,
            pointBackgroundColor: "#0d4794",
            pointBorderColor: "#0d4794",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "#0d4794",
            pointHoverBorderColor: "#0d4794",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [0, 5, 20, 15, 17, 15, 2, 20, 5, 10],
            normalized:true,
            tension:0.3,
          }],
        },
        options: {
          plugins: {
            legend: {
                display: false,
            }
          },
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
        },
        
      });



      this.myPieChart = new Chart('myPieChart', {
        type: 'doughnut',
        data: {
          labels: ["Logged In", "Registered", "Survey"],
          datasets: [{
            data: [this.loggedIn, 20, this.noOfSurvey],
            backgroundColor: ['#0d4794', '#de0428', '#f6c23e'],
            hoverBackgroundColor: ['#0d4794', '#de0428', '#f6c23e'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
                display: true,
                position:"bottom"
            }
          },  
        },
      });







  }
}
