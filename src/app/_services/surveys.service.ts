import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {Survey} from '../models/survey.model';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  private dbPath = '/surveys';

  surveyRef: AngularFireList<Survey>;


  constructor(private db: AngularFireDatabase) { 
    this.surveyRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Survey> {
    return this.surveyRef;
  }

  create(survey: Survey): any {
    return this.surveyRef.push(survey);
  }

  update(key: string, value: any): Promise<void> {
    return this.surveyRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.surveyRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.surveyRef.remove();
  }
}

