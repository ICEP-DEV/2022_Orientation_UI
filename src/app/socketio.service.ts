import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socketState : boolean = false;
  public socket : io.Socket = io.connect('http://localhost:6900', {transports: ['websocket', 'polling', 'flashsocket']})
 
  constructor() { }

 
}
