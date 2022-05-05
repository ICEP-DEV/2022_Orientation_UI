import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private secureProtocol : string = "http://"
  private serverAddress : string = "ec2-3-80-224-126.compute-1.amazonaws.com:"
  private serverPort : string = "6900"
  socketState : boolean = false;



  public socket : io.Socket = io.connect(this.secureProtocol+this.serverAddress+this.serverPort, {transports: ['websocket', 'polling', 'flashsocket']})

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
