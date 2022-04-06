import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeanComponent } from './modal-dean.component';

describe('ModalDeanComponent', () => {
  let component: ModalDeanComponent;
  let fixture: ComponentFixture<ModalDeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
