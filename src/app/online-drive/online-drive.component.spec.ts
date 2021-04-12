import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDriveComponent } from './online-drive.component';

describe('OnlineDriveComponent', () => {
  let component: OnlineDriveComponent;
  let fixture: ComponentFixture<OnlineDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
