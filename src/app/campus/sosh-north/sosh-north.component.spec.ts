import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoshNorthComponent } from './sosh-north.component';

describe('SoshNorthComponent', () => {
  let component: SoshNorthComponent;
  let fixture: ComponentFixture<SoshNorthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoshNorthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoshNorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
