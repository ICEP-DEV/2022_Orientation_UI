import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceSurveyComponent } from './science-survey.component';

describe('ScienceSurveyComponent', () => {
  let component: ScienceSurveyComponent;
  let fixture: ComponentFixture<ScienceSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
