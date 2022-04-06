import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctPlkComponent } from './ict-plk.component';

describe('IctPlkComponent', () => {
  let component: IctPlkComponent;
  let fixture: ComponentFixture<IctPlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctPlkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IctPlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
