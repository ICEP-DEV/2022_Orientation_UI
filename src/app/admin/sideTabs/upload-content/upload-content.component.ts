import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.css']
})

export class UploadContentComponent implements OnInit {
//this.body={title = "",description ="",author = "",created_on = "",path= "",link = "",subTittle= ""};
title: string = "";
description: string ="";
author: string = "";
created_on: string = "";
path: string= "";
link: string = "";
subTittle: string= "";

  selectedFile: string ="";
  text: string ="";
  
  constructor(private _userService : UserService, private http: HttpClient) {
   
  }
  

  onFileSelected(event:any){
    

    this.selectedFile = event.target.files[0];
    
  }

  onUpload(){
    
    const fd = new FormData();
    fd.append('image', this.selectedFile);
    this._userService.postBlog({"title":this.title,"description":this.description,"author":this.author,"path":this.path,"datePosted":this.created_on,"link":this.link

    }).subscribe((result:any )=>{
      if(result.error == false)
      {
       // this.put("title",this.title);
      }
    })
    this.http.post('http://localhost:3007/uploadImage', fd).subscribe( res=>{
      console.log(res);
    })
  }

  onUploadVideo(){
    const fd = new FormData();
    fd.append('video', this.selectedFile);
    this.http.post('http://localhost:3007/uploadVideo', fd).subscribe( res=>{
      console.log(res);
    })
  }
  ngOnInit(): void {
  }

}

/*export class AppComponent {
   selectedFile = null;
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }
  constructor(private _userService : UserService, private http: HttpClientModule) {}
}*/



