import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSurveyComponent } from './art-survey.component';

describe('ArtSurveyComponent', () => {
  let component: ArtSurveyComponent;
  let fixture: ComponentFixture<ArtSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
