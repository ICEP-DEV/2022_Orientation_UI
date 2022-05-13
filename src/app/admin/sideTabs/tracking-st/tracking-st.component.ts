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

  groupValue : boolean = true;

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
    
    this.getAllTracksTable()
    
  }

  getAllTracksTable()
  { 
    let body
    if(this.groupValue)
      body = {email:"",firstname:"",lastname:"",studNum:"",when:"earliest*"}
    
    this._userService.getTrackAll(body).subscribe((records)=>
    {
      this.dataSource = new MatTableDataSource(records.data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sorter;
      this.filterType = MatTableFilter.ANYWHERE;
    })

 

  }

  groupEvent()
  {
    setTimeout(() => {
      this.getAllTracksTable()
    }, 50);
    
  }

  ApplyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

  
 

}
