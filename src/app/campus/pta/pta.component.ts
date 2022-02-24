import { Component, OnInit } from '@angular/core';
import { EventEmitterService} from '../../_services/event-emitter.service';

@Component({
  selector: 'app-pta',
  templateUrl: './pta.component.html',
  styleUrls: ['./pta.component.css']
})
export class PtaComponent implements OnInit {

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
