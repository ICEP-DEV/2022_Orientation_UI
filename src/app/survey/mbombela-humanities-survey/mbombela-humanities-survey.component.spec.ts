import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbombelaHumanitiesSurveyComponent } from './mbombela-humanities-survey.component';

describe('MbombelaHumanitiesSurveyComponent', () => {
  let component: MbombelaHumanitiesSurveyComponent;
  let fixture: ComponentFixture<MbombelaHumanitiesSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbombelaHumanitiesSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbombelaHumanitiesSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
