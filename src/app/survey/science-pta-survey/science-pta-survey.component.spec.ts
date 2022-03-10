import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencePtaSurveyComponent } from './science-pta-survey.component';

describe('SciencePtaSurveyComponent', () => {
  let component: SciencePtaSurveyComponent;
  let fixture: ComponentFixture<SciencePtaSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciencePtaSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencePtaSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
