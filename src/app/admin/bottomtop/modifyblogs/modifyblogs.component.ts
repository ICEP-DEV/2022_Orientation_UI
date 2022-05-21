import { Component, Inject} from '@angular/core';
import { Blog } from './../../../blog/blog.component'
import { UserService } from './../../../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OrientationService } from 'src/app/orientation.service';

@Component({
  selector: 'app-modifyblogs',
  templateUrl: './modifyblogs.component.html',
  styleUrls: ['./modifyblogs.component.css']
})
export class ModifyblogsComponent {

  blogData : Blog[] =  []

  //Declaration of the the necessary object is done on the parameter of the constructor
  //Get all blogs inside the constructor
  constructor(
    private _userService : UserService,
    public dialog: MatDialog,
    private toast : ToastrService,
    private _orientationService : OrientationService,
  ) {
    this._userService.getAllBlogs().subscribe((result)=>{
      if(result.error) throw result.message
      else
        this.blogData = result.data
    })
   }


   //The blog is being openned with the Dialog overview, data is passed of the clicked blog
   //Subscribe to after close event ,If result of true signaling the user updated something
   //Data is being re fetch from the server 
   editBlog(blogIndex : string,subTittle : string,tittle : string,discription: string,author :string,link:string)
   {
      const dialogRef = this.dialog.open(DialogOverviewEditBlog,{data:{id:blogIndex,subTittle:subTittle,tittle:tittle,discription:discription,author:author,link:link},width:"40%"})

      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.toast.success("Video was updated successfully","Update")
          this._userService.getAllBlogs().subscribe((result)=>{
              if(result.error) throw result.message
              else
                this.blogData = result.data
          })
        }
     
    });
   
    }

    //The blog is being deleted we get index of the clicked blog and pass its to our blog delete context 
    //to the server after refresh for instant data removal
   deleteBlog(blogIndex : string)
   {
    if(confirm("Are you sure you would like to delete this blog permanently"))
      this._orientationService.deleteblog(blogIndex).subscribe(()=>{
        this._userService.getAllBlogs().subscribe((result)=>{
          if(result.error) throw result.message
          else
              this.blogData = result.data
              this.toast.success("Video was deleted successfully","Delete")
          })
      })
     
   }

}













@Component({
  selector: 'blog-modify',
  templateUrl: './edit-blog.html',
  styleUrls: ['./modifyblogs.component.css']
})
export class DialogOverviewEditBlog {
  tittleFormControl = new FormControl('', [Validators.required, Validators.maxLength(70),Validators.minLength(3)]);
  subTittleFormControl = new FormControl('', [Validators.required, Validators.maxLength(70),Validators.minLength(5)]);
  authorFormControl = new FormControl('', [Validators.required, Validators.maxLength(70),Validators.minLength(5)]);
  discriptionFormControl = new FormControl('', [Validators.required, Validators.maxLength(500),Validators.minLength(5)]);
  linkFormControl = new FormControl('', [Validators.required, Validators.maxLength(500),Validators.minLength(5)]);

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewEditBlog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toast : ToastrService,
    private _orientationService : OrientationService,
  ) {
    this.tittleFormControl.setValue(data.tittle)
    this.subTittleFormControl.setValue(data.subTittle)
    this.authorFormControl.setValue(data.author)
    this.discriptionFormControl.setValue(data.discription)
    this.linkFormControl.setValue(data.link)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //Saving of the blog after editing
  //Checking of the each field that is having any error if all correct 
  //Send new values as json object to the server saving the new value if no error returns with response
  //Close the the overview with positive result for the parant component to refresh the list of blogs
  save()
  {
    if(this.tittleFormControl.errors)
    {
      this.toast.error("Tittle is required","Error")
      return
    }

    if(this.subTittleFormControl.errors)
    {
      this.toast.error("SubTittle is required","Error")
      return
    }

    if(this.authorFormControl.errors)
    {
      this.toast.error("Author field is required","Error")
      return
    }

    if(this.discriptionFormControl.errors)
    {
      this.toast.error("Discription is required","Error")
      return
    }

    if(this.linkFormControl.errors)
    {
      this.toast.error("Link is required","Error")
      return
    }

    this._orientationService.updateBlog({
      "id":this.data.id,
      "title":this.tittleFormControl.value,
      "subtittle":this.subTittleFormControl.value,
      "description":this.discriptionFormControl.value,
      "author":this.authorFormControl.value,
      "link":this.linkFormControl.value
    })
    .subscribe((result)=>{
      if(!result.error)
      {
        this.dialogRef.close(true);
        return
      }
      else
      {
        alert("Couldn't update your blog details please try again later")
        return
      }
    })

  }

}
