import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedOrderComponent } from './picked-order.component';

describe('PickedOrderComponent', () => {
  let component: PickedOrderComponent;
  let fixture: ComponentFixture<PickedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
