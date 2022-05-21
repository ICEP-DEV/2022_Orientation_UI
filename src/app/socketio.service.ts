import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { HttpClient } from '@angular/common/http';
import { GRAPH_HOSTNAME,SOCK_HOSTNAME } from '../globals'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  private serverAddress : string = GRAPH_HOSTNAME
  private socketioHost : string = SOCK_HOSTNAME
  socketState : boolean = false;



  public socket : io.Socket = io.connect(this.socketioHost, {transports: ['websocket', 'polling']})

  constructor(private http : HttpClient) { }

  getStatsBatch(body : any)
  {
      return this.http.post<any>(this.serverAddress+'/stat/stats', body, {});
  }

  getLogginsOverView()
  {
    return this.http.get<any>(this.serverAddress+'/Track/LoginOverview',{})
  }

  getCampusesMost()
  {
    return this.http.get<any>(this.serverAddress+'/stat/stats',{})
  }
}
