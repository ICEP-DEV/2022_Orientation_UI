import { Component, OnInit } from '@angular/core';
import { EventEmitterService} from '../../_services/event-emitter.service';

@Component({
  selector: 'app-sosh-south',
  templateUrl: './sosh-south.component.html',
  styleUrls: ['./sosh-south.component.css']
})
export class SoshSouthComponent implements OnInit {

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
