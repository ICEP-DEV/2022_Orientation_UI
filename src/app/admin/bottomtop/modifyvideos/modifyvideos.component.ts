import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { OrientationService } from './../../../orientation.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { SocketioService } from './../../../socketio.service'
import { ToastrService } from 'ngx-toastr';


interface Video {  
  category : string;
  content :[{
    id:number;
    tittle : string;
    path : string;
    createdAt : string;
  }]
}


@Component({
  selector: 'app-modifyvideos',
  templateUrl: './modifyvideos.component.html',
  styleUrls: ['./modifyvideos.component.css']
})
export class ModifyvideosComponent implements OnInit {

  videos : Video[] = [{category:"",content:[{id:1,tittle:"",path:"",createdAt:""}]}]

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _orientationService : OrientationService,
    public dialog: MatDialog,
    private _socketIO : SocketioService,
    private toast : ToastrService,
  ) { 
    
    this._orientationService.getVideos(data.faculty.id.toString()).subscribe((result)=>{
      this.videos = result.data
    })
  }

  ngOnInit(): void {
  }

  deleteVideo(videoIndex : any)
  {
    if(confirm("Are you sure you would like to delete this video permanently"))
    this._orientationService.deleteVideo({id:videoIndex}).subscribe((result)=>{
      if(!result.error)
      {
        this.toast.success("The video was successfully deleted","Delete")
        this._orientationService.getVideos(this.data.faculty.id.toString()).subscribe((result)=>{
          this.videos = result.data
          this._socketIO.socket.emit("VideoUploaded")
        })
      }
      else
      {
        alert("Couldn't delete the video please try again later")
      }
    })
  }

  editVideo(videoIndex : any,videoTittle : any,videoCategory : any)
  {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog,{data:{id:videoIndex,tittle:videoTittle,category:videoCategory},width:"40%"})
    
    dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.toast.success("The video was successfully modified","Delete")
          this._orientationService.getVideos(this.data.faculty.id.toString()).subscribe((result)=>{
            this.videos = result.data
          })
        }
     
    });
  }


}















@Component({
  selector: 'dialog-modify',
  templateUrl: './edit-video.html',
  styleUrls: ['./modifyvideos.component.css']
})
export class DialogOverviewExampleDialog {
  tittleFormControl = new FormControl('', [Validators.required, Validators.maxLength(60),Validators.minLength(3)]);
  categoryFormControl = new FormControl('', [Validators.required, Validators.maxLength(30),Validators.minLength(5)]);
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _orientationService : OrientationService,
    private toast : ToastrService
  ) {
    this.tittleFormControl.setValue(data.tittle)
    this.categoryFormControl.setValue(data.category)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save()
  {
    if(this.tittleFormControl.errors)
    {

      this.toast.error("Tittle is required","Missing Field")
      return
    }

    if(this.categoryFormControl.errors)
    {
      this.toast.error("Category is required","Missing Field")
      return
    }

    this._orientationService.updateVideo({id:this.data.id,category:this.categoryFormControl.value,tittle:this.tittleFormControl.value})
    .subscribe((result)=>{
      if(!result.error)
      {
        this.dialogRef.close(true);
        return
      }
      else
      {
        this.toast.error("Couldn't update your video's details please try again later","Oops")
        return
      }
    })

  }

}

