import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbombelaManScienceSurveyComponent } from './mbombela-man-science-survey.component';

describe('MbombelaManScienceSurveyComponent', () => {
  let component: MbombelaManScienceSurveyComponent;
  let fixture: ComponentFixture<MbombelaManScienceSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbombelaManScienceSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbombelaManScienceSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
