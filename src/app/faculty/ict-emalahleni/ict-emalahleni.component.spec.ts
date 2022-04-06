import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctEmalahleniComponent } from './ict-emalahleni.component';

describe('IctEmalahleniComponent', () => {
  let component: IctEmalahleniComponent;
  let fixture: ComponentFixture<IctEmalahleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctEmalahleniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IctEmalahleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
