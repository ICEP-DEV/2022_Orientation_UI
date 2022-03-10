import { Component, OnInit,Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        marginRight:0,
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        marginRight:-300,
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class ToastComponent implements OnInit {

 
  //message : string = '';
  //isOpen : boolean = true;

  @Input() messageProp : string = '';
  @Input() isOpen : boolean = false;
  
  constructor() { 
  }

  ngOnInit(): void {
    
  }

 

 
  

}
