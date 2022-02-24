import { Component, OnInit } from '@angular/core';
import { EventEmitterService} from '../../_services/event-emitter.service';

@Component({
  selector: 'app-mbombela',
  templateUrl: './mbombela.component.html',
  styleUrls: ['./mbombela.component.css']
})
export class MbombelaComponent implements OnInit {

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
