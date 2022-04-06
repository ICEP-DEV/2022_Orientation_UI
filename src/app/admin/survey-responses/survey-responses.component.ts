import { Component, OnInit } from '@angular/core';
import { SurveysService } from 'src/app/_services/surveys.service';
import { Survey } from 'src/app/models/survey.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-survey-responses',
  templateUrl: './survey-responses.component.html',
  styleUrls: ['./survey-responses.component.css']
})
export class SurveyResponsesComponent implements OnInit {

  surveys?: Survey[];
  currentSurvey?: Survey;
  currentIndex = -1;
  title = '';
  
  constructor(private surveyService: SurveysService) { }

  ngOnInit(): void {
    this.retrieveSurveys();
  }

  refreshList(): void {
    this.currentSurvey = undefined;
    this.currentIndex = -1;
    this.retrieveSurveys();
  }

  retrieveSurveys(): void {
    this.surveyService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.surveys = data;
    });
  }

  setActiveSurvey(tutorial: Survey, index: number): void {
    this.currentSurvey = tutorial;
    this.currentIndex = index;
  }

  removeAllSurveys(): void {
    this.surveyService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

}
