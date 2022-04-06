import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInformaticsComponent } from './modal-informatics.component';

describe('ModalInformaticsComponent', () => {
  let component: ModalInformaticsComponent;
  let fixture: ComponentFixture<ModalInformaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInformaticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInformaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
