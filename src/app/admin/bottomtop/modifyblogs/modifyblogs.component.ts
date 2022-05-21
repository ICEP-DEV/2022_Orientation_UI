import { Component, OnInit } from '@angular/core';
import { Blog } from './../../../blog/blog.component'

@Component({
  selector: 'app-modifyblogs',
  templateUrl: './modifyblogs.component.html',
  styleUrls: ['./modifyblogs.component.css']
})
export class ModifyblogsComponent implements OnInit {

  dataSouce : Blog = {title:"",description:"",author:"",created_on:"",path:"",link:"",subTittle:""}

  constructor() { }

  ngOnInit(): void {
  }

}
