import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsSurveyComponent } from './arts-survey.component';

describe('ArtsSurveyComponent', () => {
  let component: ArtsSurveyComponent;
  let fixture: ComponentFixture<ArtsSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtsSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
