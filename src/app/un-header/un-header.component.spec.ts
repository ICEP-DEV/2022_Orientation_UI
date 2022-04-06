import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnHeaderComponent } from './un-header.component';

describe('UnHeaderComponent', () => {
  let component: UnHeaderComponent;
  let fixture: ComponentFixture<UnHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
