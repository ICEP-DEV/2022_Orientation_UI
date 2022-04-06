import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencePtaComponent } from './science-pta.component';

describe('SciencePtaComponent', () => {
  let component: SciencePtaComponent;
  let fixture: ComponentFixture<SciencePtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciencePtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencePtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
