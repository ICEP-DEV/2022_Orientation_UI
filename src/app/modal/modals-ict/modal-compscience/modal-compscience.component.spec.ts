import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompscienceComponent } from './modal-compscience.component';

describe('ModalCompscienceComponent', () => {
  let component: ModalCompscienceComponent;
  let fixture: ComponentFixture<ModalCompscienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompscienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompscienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
