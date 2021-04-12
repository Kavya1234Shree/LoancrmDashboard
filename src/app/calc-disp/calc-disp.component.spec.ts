import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDispComponent } from './calc-disp.component';

describe('CalcDispComponent', () => {
  let component: CalcDispComponent;
  let fixture: ComponentFixture<CalcDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
