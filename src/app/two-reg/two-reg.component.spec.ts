import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoRegComponent } from './two-reg.component';

describe('TwoRegComponent', () => {
  let component: TwoRegComponent;
  let fixture: ComponentFixture<TwoRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
