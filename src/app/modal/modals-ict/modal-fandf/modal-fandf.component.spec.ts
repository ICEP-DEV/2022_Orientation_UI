import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFandfComponent } from './modal-fandf.component';

describe('ModalFandfComponent', () => {
  let component: ModalFandfComponent;
  let fixture: ComponentFixture<ModalFandfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFandfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFandfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
