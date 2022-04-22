import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { OrientationService } from './../../../orientation.service'

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
  campusControl = new FormControl('', Validators.required);
  facultyControl = new FormControl('',Validators.required)
  tittleFormControl = new FormControl('', [Validators.required, Validators.maxLength(25),Validators.minLength(3)]);
  srcResult : string =""
  fileName : string ="Select a video"
  fileObject : File = File.prototype;
  formData : FormData = FormData.prototype
  matcher = new MyErrorStateMatcher();
  
  campuses: Campus[] = [];

  faculties: Faculty[] = [];

  //-------------------------------
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  categories: Category[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our category
    if (value) {
      this.categories.push({category: value});
    }
    // Clear the input value
    event.input.value = "" 
  }

  onFileSelected(event : any) {
    this.fileObject  = event.target.files[0];
        if (this.fileObject) {
            this.fileName = this.fileObject.name;
            this.formData = new FormData();
            this.formData.append("video", this.fileObject);    
        }
  }
  addNewVideo()
  {
    this._orientation.sendNewVideo(this.formData).subscribe((result)=>{
      console.log(result)
    })
    
  }


  constructor(
    private _orientation : OrientationService,
  ) { }

  ngOnInit(): void {
    this._orientation.getCampuses().subscribe((result)=>{
        this.campuses = result.data
    })
  }

  campusSelect(event : any)
  {
    this._orientation.getFaculty(event.id).subscribe((result)=>{
        this.faculties = result.data
    })
  }

  facultySelect(event : any)
  {
   
    this._orientation.getVideos(event.id).subscribe((result)=>{
      this.categories = result.data
    })
  }

}
