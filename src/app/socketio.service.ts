import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socketState : boolean = false;
  public socket : io.Socket = io.connect('http://3.80.224.126:6900', {transports: ['websocket', 'polling', 'flashsocket']})
 
  private secureProtocol : string = "http://"
  private serverAddress : string = "3.80.224.126:"
  private serverPort : string = "6900"
 
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
    return this.http.get<any>('http://3.80.224.126:6900/stat/stats',{})
  }
}
