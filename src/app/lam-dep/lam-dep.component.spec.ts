import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamDepComponent } from './lam-dep.component';

describe('LamDepComponent', () => {
  let component: LamDepComponent;
  let fixture: ComponentFixture<LamDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
