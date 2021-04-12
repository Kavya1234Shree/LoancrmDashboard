import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpDialogComponent } from './dump-dialog.component';

describe('DumpDialogComponent', () => {
  let component: DumpDialogComponent;
  let fixture: ComponentFixture<DumpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
