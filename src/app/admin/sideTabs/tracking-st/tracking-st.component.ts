import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableFilter } from 'mat-table-filter';
import { UserService } from 'src/app/user.service';

export interface Track {
  id: string;
  firstname: string;
  lastname: string;
  studNum: string;
  activity: string;
  datetime: string;
}

const TRACK_DATA: Track[] = [];


@Component({
  selector: 'app-tracking-st',
  templateUrl: './tracking-st.component.html',
  styleUrls: ['./tracking-st.component.css']
})
export class TrackingStComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'studNum','activity','datetime'];
  dataSource = new MatTableDataSource<Track>(TRACK_DATA);

  filterType: MatTableFilter = MatTableFilter.ANYWHERE;
  filterEntity: Track = {activity:"",datetime:"",firstname:"",lastname:"",id:"",studNum:""};

  @ViewChild(MatPaginator, {static: true}) paginator : any
  @ViewChild(MatSort, {static: true}) sorter : any

  constructor(
    private _userService : UserService
  ) { 
    
  }

  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sorter;
    this.filterType = MatTableFilter.ANYWHERE;

    this._userService.getTrackAll().subscribe((records)=>
    {
      this.dataSource = new MatTableDataSource(records.data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sorter;
      this.filterType = MatTableFilter.ANYWHERE;
    })
    
  }
  
 

}
