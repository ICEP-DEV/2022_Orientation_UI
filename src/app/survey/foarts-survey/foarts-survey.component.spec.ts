import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoartsSurveyComponent } from './foarts-survey.component';

describe('FoartsSurveyComponent', () => {
  let component: FoartsSurveyComponent;
  let fixture: ComponentFixture<FoartsSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoartsSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoartsSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
