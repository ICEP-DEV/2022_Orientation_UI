import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.css']
})
export class UploadContentComponent implements OnInit {
//this.body={title = "",description ="",author = "",created_on = "",path= "",link = "",subTittle= ""};
title: string = " ";
description: string ="";
author: string = "";
created_on: string = "";
path: string= "";
link: string = "";
subtittle: string= "";



  selectedFile: string ="";
 
  
  constructor(private _userService : UserService, private http: HttpClient) {
   
  }
  

  onFileSelected(event:any){
    

    this.selectedFile = event.target.files[0];
    
  }

  onUpload(){
    
    const fd = new FormData();
    fd.append('image', this.selectedFile);
    fd.append('title', this.title);
    fd.append('subtittle', this.subtittle);
    fd.append('description', this.description);
    fd.append('author', this.author);
    fd.append('path', this.path);
    fd.append('link', this.link);
    this.http.post('http://localhost:3007/uploadImage', fd).subscribe( res=>{
      console.log(res);
    })
  }

  onUploadVideo(){
    const fd = new FormData();
    fd.append('video', this.selectedFile);
    fd.append('title', this.title);
    fd.append('subtittle', this.subtittle);
    fd.append('description', this.description);
    fd.append('author', this.author);
    fd.append('path', this.path);
    fd.append('link', this.link);
    this.http.post('http://localhost:3007/uploadVideo', fd).subscribe( res=>{
      console.log(res);
    })
  }

  onDelete(){
    
  }

  onEditBlog(){
    
  }

 
  ngOnInit(): void{
   
  }

}




