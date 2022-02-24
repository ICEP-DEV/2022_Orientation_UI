import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeFirstComponentFunction = new EventEmitter();
  invokeFirstComponentFunction2 =  new EventEmitter();

  subsVar!: Subscription;
  subsVar2!: Subscription;

  constructor() { }

  onAssignFacultyClick(faculty: string) {
    this.invokeFirstComponentFunction.emit(faculty);
  }

  onAssignSurveyClick(survey: string) {
    this.invokeFirstComponentFunction2.emit(survey);
  }

}
