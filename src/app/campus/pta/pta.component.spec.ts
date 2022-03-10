import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtaComponent } from './pta.component';

describe('PtaComponent', () => {
  let component: PtaComponent;
  let fixture: ComponentFixture<PtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
