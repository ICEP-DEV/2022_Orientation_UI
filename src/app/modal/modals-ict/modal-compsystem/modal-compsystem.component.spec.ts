import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompsystemComponent } from './modal-compsystem.component';

describe('ModalCompsystemComponent', () => {
  let component: ModalCompsystemComponent;
  let fixture: ComponentFixture<ModalCompsystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompsystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
