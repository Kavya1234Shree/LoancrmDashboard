import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedDialogComponent } from './recieved-dialog.component';

describe('RecievedDialogComponent', () => {
  let component: RecievedDialogComponent;
  let fixture: ComponentFixture<RecievedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
