import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEmalahleniComponent } from './management-emalahleni.component';

describe('ManagementEmalahleniComponent', () => {
  let component: ManagementEmalahleniComponent;
  let fixture: ComponentFixture<ManagementEmalahleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementEmalahleniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEmalahleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
