import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyvideosComponent } from './modifyvideos.component';

describe('ModifyvideosComponent', () => {
  let component: ModifyvideosComponent;
  let fixture: ComponentFixture<ModifyvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
