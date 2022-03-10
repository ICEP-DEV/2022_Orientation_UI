import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbudsmanComponent } from './ombudsman.component';

describe('OmbudsmanComponent', () => {
  let component: OmbudsmanComponent;
  let fixture: ComponentFixture<OmbudsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmbudsmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmbudsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
