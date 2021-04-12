import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotyDialogComponent } from './noty-dialog.component';

describe('NotyDialogComponent', () => {
  let component: NotyDialogComponent;
  let fixture: ComponentFixture<NotyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
