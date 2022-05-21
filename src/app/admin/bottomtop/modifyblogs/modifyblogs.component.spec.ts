import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyblogsComponent } from './modifyblogs.component';

describe('ModifyblogsComponent', () => {
  let component: ModifyblogsComponent;
  let fixture: ComponentFixture<ModifyblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
