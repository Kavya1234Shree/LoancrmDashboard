import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoDialogComponent } from './topo-dialog.component';

describe('TopoDialogComponent', () => {
  let component: TopoDialogComponent;
  let fixture: ComponentFixture<TopoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
