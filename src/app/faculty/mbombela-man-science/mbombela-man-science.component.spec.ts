import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbombelaManScienceComponent } from './mbombela-man-science.component';

describe('MbombelaManScienceComponent', () => {
  let component: MbombelaManScienceComponent;
  let fixture: ComponentFixture<MbombelaManScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbombelaManScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbombelaManScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
