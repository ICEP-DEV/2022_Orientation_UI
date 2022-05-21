import { Component, OnInit } from '@angular/core';
import { Blog } from './../../../blog/blog.component'
import { UserService } from './../../../user.service';

@Component({
  selector: 'app-modifyblogs',
  templateUrl: './modifyblogs.component.html',
  styleUrls: ['./modifyblogs.component.css']
})
export class ModifyblogsComponent implements OnInit {

  blogData : Blog[] =  [{author:"",created_on:"",description:"",link:"",path:"",subTittle:"",title:""}]

  constructor(
    private _userService : UserService
  ) {
    this._userService.getAllBlogs().subscribe((result)=>{
      if(result.error) throw result.message
      else
        this.blogData = result.data
    })
   }

}
