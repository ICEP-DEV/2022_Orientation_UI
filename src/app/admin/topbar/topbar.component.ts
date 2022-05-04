import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SearchComponent } from './../search/search.component'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

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
    
  ) { }

  ngOnInit(): void {
    
  }

  search()
  {

    this._bottomSheet.open(SearchComponent,{data:{ValSearch:this.searchControl.value}})
  }

}
