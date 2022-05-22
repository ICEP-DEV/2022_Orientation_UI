import { Component, OnInit } from '@angular/core';
import { SocketioService } from './../socketio.service'
import { CookieService } from 'ngx-cookie-service'
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  deviceInfo : any = null;
  
  constructor(
    private _socketConnection : SocketioService,
    private cookieService: CookieService,
    private deviceService: DeviceDetectorService
  ) { 

      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      console.log(this.deviceInfo);
      console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
      console.log(isTablet);  // returns if the device us a tablet (iPad etc)
      console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }

  ngOnInit(): void { 
   
  }

  startOr()
  {
  }
 

}
