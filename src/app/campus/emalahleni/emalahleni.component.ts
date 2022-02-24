import { Component, OnInit } from '@angular/core';
import { EngineeringEmalahleniComponent} from '../../faculty/engineering-emalahleni/engineering-emalahleni.component';
import { HumanitiesEmalahleniComponent} from '../../faculty/humanities-emalahleni/humanities-emalahleni.component';
import { IctEmalahleniComponent } from '../../faculty/ict-emalahleni/ict-emalahleni.component';
import { ManagementEmalahleniComponent } from '../../faculty/management-emalahleni/management-emalahleni.component';
import { EventEmitterService} from '../../_services/event-emitter.service';

@Component({
  selector: 'app-emalahleni',
  templateUrl: './emalahleni.component.html',
  styleUrls: ['./emalahleni.component.css']
})
export class EmalahleniComponent implements OnInit {

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
