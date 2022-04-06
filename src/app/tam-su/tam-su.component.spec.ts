import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamSuComponent } from './tam-su.component';

describe('TamSuComponent', () => {
  let component: TamSuComponent;
  let fixture: ComponentFixture<TamSuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamSuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
