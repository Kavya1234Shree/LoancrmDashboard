import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FouroffilneComponent } from './fouroffilne.component';

describe('FouroffilneComponent', () => {
  let component: FouroffilneComponent;
  let fixture: ComponentFixture<FouroffilneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FouroffilneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FouroffilneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
