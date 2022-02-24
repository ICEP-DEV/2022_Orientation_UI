import { Component, OnInit } from '@angular/core';
import { EventEmitterService} from '../../_services/event-emitter.service';

@Component({
  selector: 'app-plk',
  templateUrl: './plk.component.html',
  styleUrls: ['./plk.component.css']
})
export class PlkComponent implements OnInit {

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
