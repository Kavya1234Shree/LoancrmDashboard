import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReworkDialogComponent } from './rework-dialog.component';

describe('ReworkDialogComponent', () => {
  let component: ReworkDialogComponent;
  let fixture: ComponentFixture<ReworkDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReworkDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReworkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
