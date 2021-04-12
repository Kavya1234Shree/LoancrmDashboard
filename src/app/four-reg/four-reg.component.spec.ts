import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourRegComponent } from './four-reg.component';

describe('FourRegComponent', () => {
  let component: FourRegComponent;
  let fixture: ComponentFixture<FourRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
