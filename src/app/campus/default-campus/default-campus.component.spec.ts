import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCampusComponent } from './default-campus.component';

describe('DefaultCampusComponent', () => {
  let component: DefaultCampusComponent;
  let fixture: ComponentFixture<DefaultCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCampusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
