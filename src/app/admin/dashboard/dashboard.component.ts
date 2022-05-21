import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { SocketioService } from './../../socketio.service'
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
        state('default', style({ transform: 'rotate(0)' })),
        state('rotated', style({ transform: 'rotate(360deg)' })),
        transition('rotated => default', animate('400ms ease-out')),
        transition('default => rotated', animate('400ms ease-in'))
  ])
  ]
})
export class DashboardComponent implements OnInit {

  userEmail : any
  state: string = 'default';
  students: number = 0;
  visitors: number = 0;
  videos:number =0;
  surveys:string ="";
  loggedIn:number=0;
  noOfSurvey:number = 0
  widthStyle:string ="width:0%";
  noCampus:boolean = false
 
  //
  nowMonth : string = new Date().toDateString()
  chart: any = [];
  myPieChart:any = [];

  

  constructor(
    private usersService: UserService, 
    private _socketConnection: SocketioService,
    private _router : Router,
    private _cookiesService : CookieService
    ) 
  {
    this.userEmail = this._cookiesService.get("userEmail_A")
    if(!this.userEmail)
    {
      this._router.navigate(['admin-login'])
    }
    Chart.register(...registerables)
    _socketConnection.getStatsBatch({}).subscribe((result)=>
    {
      this.visitors = result.data[0].viewNumVisitors
      this.surveys = ((result.data[0].survey / result.data[0].countUsers) * 100).toFixed(0)
      this.noOfSurvey = result.data[0].survey
      this.widthStyle = "width:"+this.surveys+"%"
      if(this.surveys == 'NaN') this.surveys = "0"
      this.videos = result.data[0].uploadVideo
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
      this._socketConnection.socket.on("VideosCount",(instream)=>{
        this.videos= instream;
      })
      this._socketConnection.socket.on("countSurvey",(instream)=>{
        this.surveys = ((instream / this.students) * 100).toFixed(0);
        this.noOfSurvey = instream
        if(this.surveys == undefined) console.log("sd")
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
      
      
      this._socketConnection.getLogginsOverView().subscribe((result)=>{  
      this.chart = new Chart('myAreaChart', {
        type: 'line',
        data: {
          labels: ["Today",dateShift(1), dateShift(2), dateShift(3), dateShift(4), dateShift(5), dateShift(6), dateShift(7), dateShift(8), dateShift(9)],
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
            data: result.data,
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
      })



      this.myPieChart = new Chart('myPieChart', {
        type: 'doughnut',
        data: {
          labels: [],
          datasets: [{
            data: [],
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


      this._socketConnection.socket.on("updateLine",(instream)=>{
        this.chart.data.datasets[0].data = JSON.parse(instream);
        this.chart.update();
      })

      this._socketConnection.socket.on("updatePie",(instream)=>{
        this.upload()
      })

      this.upload()
  }


 

  upload()
  {
    this.state = (this.state === 'default' ? 'rotated' : 'default');

    this._socketConnection.getLogginsOverView().subscribe((result)=>{
      this.chart.data.datasets[0].data = result.data;
      this.chart.update();
    })



    this._socketConnection.getCampusesMost().subscribe((result)=>{ 

      this.myPieChart.data.datasets[0].data[0] = 1
      this.myPieChart.data.labels[0] = "No Campus selected yet"

        for (let index = 0; index < result.data.length; index++) {
          this.myPieChart.data.datasets[0].data[index] = result.data[index].campusStudents
          this.myPieChart.data.labels[index] = result.data[index].value
        } 
        this.myPieChart.update()
      
      
    })

    
  }
}
