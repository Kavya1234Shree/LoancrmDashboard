import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedDialogComponent } from './returned-dialog.component';

describe('ReturnedDialogComponent', () => {
  let component: ReturnedDialogComponent;
  let fixture: ComponentFixture<ReturnedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
