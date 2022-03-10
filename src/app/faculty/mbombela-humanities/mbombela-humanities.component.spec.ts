import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbombelaHumanitiesComponent } from './mbombela-humanities.component';

describe('MbombelaHumanitiesComponent', () => {
  let component: MbombelaHumanitiesComponent;
  let fixture: ComponentFixture<MbombelaHumanitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbombelaHumanitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MbombelaHumanitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
