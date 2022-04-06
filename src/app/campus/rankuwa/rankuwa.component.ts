import { Component, OnInit } from '@angular/core';
import { EventEmitterService} from '../../_services/event-emitter.service';


@Component({
  selector: 'app-rankuwa',
  templateUrl: './rankuwa.component.html',
  styleUrls: ['./rankuwa.component.css']
})
export class RankuwaComponent implements OnInit {

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
