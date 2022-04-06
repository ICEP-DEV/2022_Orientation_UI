import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesSurveyComponent } from './humanities-survey.component';

describe('HumanitiesSurveyComponent', () => {
  let component: HumanitiesSurveyComponent;
  let fixture: ComponentFixture<HumanitiesSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanitiesSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanitiesSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
