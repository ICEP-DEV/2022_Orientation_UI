import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { HttpClient } from '@angular/common/http';
import { HOSTNAME } from '../globals'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private secureProtocol : string = "http://"
  private serverAddress : string = HOSTNAME
  private serverPort : string = ""
  socketState : boolean = false;



  public socket : io.Socket = io.connect("http://ec2-54-234-88-147.compute-1.amazonaws.com", {transports: ['websocket', 'polling']})

  constructor(private http : HttpClient) { }

  getStatsBatch(body : any)
  {
      return this.http.post<any>(this.secureProtocol+this.serverAddress+this.serverPort+'/stat/stats', body, {});
  }

  getLogginsOverView()
  {
    return this.http.get<any>(this.secureProtocol+this.serverAddress+this.serverPort+'/Track/LoginOverview',{})
  }

  getCampusesMost()
  {
    return this.http.get<any>(this.secureProtocol+this.serverAddress+this.serverPort+'/stat/stats',{})
  }
}
