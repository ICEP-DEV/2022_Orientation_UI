import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoshSouthComponent } from './sosh-south.component';

describe('SoshSouthComponent', () => {
  let component: SoshSouthComponent;
  let fixture: ComponentFixture<SoshSouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoshSouthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoshSouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
