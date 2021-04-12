import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldataDialogComponent } from './totaldata-dialog.component';

describe('TotaldataDialogComponent', () => {
  let component: TotaldataDialogComponent;
  let fixture: ComponentFixture<TotaldataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaldataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
