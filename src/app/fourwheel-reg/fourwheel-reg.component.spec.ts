import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourwheelRegComponent } from './fourwheel-reg.component';

describe('FourwheelRegComponent', () => {
  let component: FourwheelRegComponent;
  let fixture: ComponentFixture<FourwheelRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourwheelRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourwheelRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
