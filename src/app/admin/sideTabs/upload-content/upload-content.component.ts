import { Component, OnInit,ChangeDetectorRef, AfterContentChecked  } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { OrientationService } from './../../../orientation.service'
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ModifyvideosComponent } from './../../bottomtop/modifyvideos/modifyvideos.component'
import { SocketioService } from './../../../socketio.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ModifyblogsComponent } from './../../bottomtop/modifyblogs/modifyblogs.component'

interface Campus{
  campus_name: string;
  id: number;
}

interface Faculty{
  faculty_name:string;
  id:number;
}

interface Category {
  category: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.css']
})
export class UploadContentComponent implements OnInit {
  
  //Upload the Post of the blog
  title: string = "";
  description: string ="";
  author: string = "";
  created_on: string = "";
  path: string= "";
  link: string = "";
  subtittle: string= "";
  selectedFile: any = {name:"Select an Image"};




  //-------------------------Uploading For video of Orientation
  campusControl = new FormControl('', Validators.required);
  facultyControl = new FormControl('',Validators.required)
  tittleFormControl = new FormControl('', [Validators.required, Validators.maxLength(25),Validators.minLength(3)]);
  categoryChipControl = new FormControl('',Validators.required)
  
  fileName : string ="Select a video"
  fileObject : File = File.prototype;
  formData : FormData = FormData.prototype
  matcher = new MyErrorStateMatcher();
  
  campuses: Campus[] = [];
  faculties: Faculty[] = [];
  categories: Category[] = [];
  
  //Actual data
  campusSelected: Campus = {id:-1,campus_name:""}
  facultySelected: Faculty = {id:-1,faculty_name:""}
  categorySelected: String = "" 

  chipState: boolean[] = [false];
  uploadWait : boolean = false

  uploadStyle:string ="width:0%";
  uploadProg:string ="0";

  uploadStyleBlog : string = "width:0%";
  uploadProgBlog : string ="0";
  //-------------------------------Chips config
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  



  //Adding a new chip of category
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our category
    if (value) {
      this.categories.push({category: value});
    }
    // Clear the input value
    event.input.value = "" 
  }


  //Event of opendialog of selecting of file
  onFileSelected(event : any) {
    this.fileObject  = event.target.files[0];
        if (this.fileObject) {        
            if(this.formData.get("video"))
              this.formData.delete("video")

            this.fileName = this.fileObject.name;
            
            this.formData.append("video", this.fileObject);    
        }
  }

  onFileSelectedBlog(event:any){
    this.selectedFile = event.target.files[0];
  }

  //Adding of the video
  addNewVideo()
  {
    if(!this.formData.get("type"))
      this.formData.append("type","orientation")
    if(!this.formData.get("fileType"))
      this.formData.append("fileType","video")
    if(this.campusControl.errors)
    {
      this.toast.warning("Campus is not selected")
      return
    }
    
    if(!this.facultyControl.errors)
    {
      if(!this.formData.get("fac"))
      {
        this.formData.append("fac",this.facultySelected.id.toString())
      }
    }
    else
    {
      this.toast.warning("Faculty is not selected")
      return
    }

    if(this.tittleFormControl.errors)
    {
        this.toast.warning("Title is having an error")
        return
    }
    else
    {
      if(!this.formData.get("title"))
        this.formData.append("title",this.tittleFormControl.value)
    }

    if(this.categorySelected == "")
    {
      this.toast.warning("No category was selected")
      return
    }
    else
    {
      if(!this.formData.get("category"))
        this.formData.append("category",this.categorySelected.toString())
    }

    if(this.fileName == "Select a video")
    {
      this.toast.warning("Select a video")
      return
    }

    if(this.fileObject.size > 150000000)
    {
      this.toast.warning("The video is too large")
      return
    }

    this.uploadWait = true 
    //----------------------------------------------------------------------------
    this._orientation.addVideo(this.formData).subscribe((event: HttpEvent<any>)=>{
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          this.uploadProg = Math.round(event.loaded / this.fileObject.size * 100).toString();
          this.uploadStyle = "width:"+Math.round(event.loaded / this.fileObject.size * 100).toString()+"%"
          console.log(`Uploaded! ${this.uploadProg}%`);
          break;
        case HttpEventType.Response:
          console.log('User successfully created!', event.body);
          setTimeout(() => {
            this.uploadProg = "0";
            this.uploadStyle= "width:0%"
          }, 2500);
      }

      if(this.uploadProg == "100")
      {
        
        setTimeout(() => {
          this.uploadProg = "0";
          this.uploadStyle= "width:0%"
          this.uploadWait = false

          this._SocketService.socket.emit("VideoUploaded")
        }, 2000);
      }
    })
    
    
  }


  constructor(
    private _orientation : OrientationService,
    private cdref: ChangeDetectorRef,
    private _bottomSheet :MatBottomSheet,
    private _SocketService : SocketioService,
    private toast : ToastrService,
    private _router : Router
  ) {
    this.formData = new FormData();
   }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    this._orientation.getCampuses().subscribe((result)=>{
        this.campuses = result.data
    })
  }

  selectChip(categoryVal : any)
  {
    this.categorySelected = categoryVal.category
  }

  campusSelect(event : any)
  {
    this.campusSelected = event;
    this._orientation.getFaculty(event.id).subscribe((result)=>{
        this.faculties = result.data
        this.categories = []
        this.facultySelected = {id:-1,faculty_name:""}
    })
  }

  facultySelect(event : any)
  {
    this.facultySelected = event;

    this._orientation.getVideos(event.id).subscribe((result)=>{
      this.categories = result.data
    })
  }

  openVideoManage()
  {
    if(!this.campusControl.errors)
      if(!this.facultyControl.errors)
        if(this.facultySelected.id != -1)
          this._bottomSheet.open(ModifyvideosComponent,{data:{faculty:this.facultySelected}})
        else
          this.toast.warning("Select a faculty")
        else
          this.toast.warning("Select a faculty")
        else
          this.toast.warning("Select a campus")
  }

  onUpload(){
    
    if(this.title == "")
    {
      this.toast.warning("Please enter tittle of the blog")
      return
    }

    if(this.subtittle == "")
    {
      this.toast.warning("Please type SubTittle of the blog")
      return
    }

    if(this.author == "")
    {
      this.toast.warning("Please enter the author of the blog")
      return
    }

    if(this.description == "")
    {
      this.toast.warning("Please add description of the blog")
      return
    }  

    if(!this.selectedFile.type)
    {
      this.toast.warning("Please upload image of the blog")
      return
    }

    if(this.link == "")
    {
      this.toast.warning("Please link the blog if no link enter *")
      return
    }

    const fd = new FormData();

    if(this.selectedFile.type.search("video") > -1)
    {
      fd.append('video', this.selectedFile);
      fd.append("type","blog")
      if(this.selectedFile.size > 150000000)
      {
        this.toast.warning("The video is too large")
        return
      }
    }
    else
    {
      fd.append('image', this.selectedFile);
      if(this.selectedFile.size > 10000000)
      {
        this.toast.warning("The image is too large")
        return
      }
    }

    if(this.title == "")
    {
      this.toast.warning("Please the tittle of the blog")
      return
    }
    
    
    fd.append('title', this.title);
    fd.append('sub', this.subtittle);
    fd.append('description', this.description);
    fd.append('author', this.author);
    fd.append('path', this.path);
    fd.append('link', this.link);

    

    
    if(this.selectedFile.type.search("video") > -1)
    {
      //Post Blog of a Image
      this._orientation.addVideo(fd).subscribe((event: HttpEvent<any>)=>{
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.uploadProgBlog = Math.round(event.loaded / this.selectedFile.size * 100).toString();
            this.uploadStyleBlog = "width:"+Math.round(event.loaded / this.selectedFile.size * 100).toString()+"%"
           
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            setTimeout(() => {
              this.uploadProgBlog = "0";
              this.uploadStyleBlog= "width:0%"
            }, 2500);
        }
  
        if(this.uploadProgBlog == "100")
        { 
          setTimeout(() => {
            this.uploadProgBlog = "0";
            this.uploadStyleBlog= "width:0%"
            this.uploadWait = false
  
          }, 2000);
        }
      })
    }
    else
    {
      //Post Blog Of a Picture
      this._orientation.addBlog(fd).subscribe((event: HttpEvent<any>)=>{
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            let totalBytes = event.total!
            this.uploadProgBlog = Math.round(event.loaded / totalBytes * 100).toString();
            this.uploadStyleBlog = "width:"+Math.round(event.loaded / totalBytes * 100).toString()+"%"
            console.log(`Uploaded! ${this.uploadProgBlog}%`);
            console.log(event.loaded)
            break;
          case HttpEventType.Response:
            console.log('User successfully created!', event.body);
            setTimeout(() => {
              this.uploadProgBlog = "0";
              this.uploadStyleBlog= "width:0%"
            }, 2500);
        }
  
        if(this.uploadProgBlog == "100")
        { 
          setTimeout(() => {
            this.uploadProgBlog = "0";
            this.uploadStyleBlog= "width:0%"
            this.uploadWait = false
  
          }, 2000);
        }
      })
    }
    

  }

  navigateBlog()
  {
    this._router.navigate(['/blog'])
  }

  deleteOrEdit(){
    this._bottomSheet.open(ModifyblogsComponent)
  }

}
