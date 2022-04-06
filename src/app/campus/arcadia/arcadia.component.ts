import { Component, OnInit } from '@angular/core';
import { EventEmitterService} from '../../_services/event-emitter.service';



@Component({
  selector: 'app-arcadia',
  templateUrl: './arcadia.component.html',
  styleUrls: ['./arcadia.component.css']
})
export class ArcadiaComponent implements OnInit {
  facultyComponent: any;

  constructor( private eventEmitterService: EventEmitterService
    ) { }

  ngOnInit(): void {
  }

  assignFaculty(faculty: string){
    this.eventEmitterService.onAssignFacultyClick(faculty);
  }

  assignSurvey(survey: string){
    this.eventEmitterService.onAssignSurveyClick(survey);
  }

}
