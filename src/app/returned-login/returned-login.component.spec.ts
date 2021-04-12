import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedLoginComponent } from './returned-login.component';

describe('ReturnedLoginComponent', () => {
  let component: ReturnedLoginComponent;
  let fixture: ComponentFixture<ReturnedLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnedLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
