import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctSurveyComponent } from './ict-survey.component';

describe('IctSurveyComponent', () => {
  let component: IctSurveyComponent;
  let fixture: ComponentFixture<IctSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IctSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
