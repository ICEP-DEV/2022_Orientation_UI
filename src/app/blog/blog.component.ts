import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

export interface Blog{
  id:string;
  title:string;
  description:string;
  author:string;
  created_on:string;
  path:string;
  link:string;
  subTittle:string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})


export class BlogComponent implements OnInit {
  blogData : Blog[] =  [{id:"",author:"",created_on:"",description:"",link:"",path:"",subTittle:"",title:""}]

  constructor(
    private _userService : UserService
  ) {
    this._userService.getAllBlogs().subscribe((result)=>{
      if(result.error) throw result.message
      else
      this.blogData = result.data
    })
   }

  ngOnInit(): void {
    
  }

}
