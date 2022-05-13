import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SearchComponent } from './../search/search.component'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  searchVal :  string = ""
  searchControl = new FormControl();
  constructor(
    private _bottomSheet :MatBottomSheet,
    private toast: ToastrService ,
  ) { }

  ngOnInit(): void {
    
  }

  search()
  {
    if(this.searchControl.value == "" || this.searchControl.value == undefined)
    {
      this.toast.warning("Enter a phrase to search globally", 'Cation');
      return
    }
    this._bottomSheet.open(SearchComponent,{data:{ValSearch:this.searchControl.value}})
  }

}
