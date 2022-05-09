import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrientationService } from './../../orientation.service'

export interface Student {
  id: string;
  firstname: string;
  lastname: string;
  studNum: string;
  orientation_progress: string;
}

export interface Video {
  id: string;
  tittle: string;
  category: string;
  type: string;
  createdAt: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  author: string;
  subTittle: string;
}

const STUDENT_DATA: Student[] = [];
const VIDEO_DATA: Video[] = [];
const BLOG_DATA: Blog[] = [];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'studNum','orientation_progress'];
  displayedColumnsVideo: string[] = ['id', 'tittle', 'category', 'type','createdAt'];
  displayedColumnsBlog: string[] = ['id', 'title', 'description', 'author','subTittle'];

  dataSource = new MatTableDataSource<Student>(STUDENT_DATA);
  dataSourceVideo = new MatTableDataSource<Video>(VIDEO_DATA);
  dataSourceBlog = new MatTableDataSource<Blog>(BLOG_DATA);



  @ViewChild(MatPaginator, {static: true}) paginator : any
  @ViewChild(MatSort, {static: true}) sorter : any

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private orientation : OrientationService
  ) { }

  ngOnInit(): void {
    this.orientation.searchOnStudent(this.data.ValSearch).subscribe((result)=>{
      this.dataSource = result.data
    })

    this.orientation.searchOnVideo(this.data.ValSearch).subscribe((result)=>{
      this.dataSourceVideo = result.data
    })

    this.orientation.searchOnBlog(this.data.ValSearch).subscribe((result)=>{
      this.dataSourceBlog = result.data
    })

  }

}
