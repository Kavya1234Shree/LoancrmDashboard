import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineDriveComponent } from './offline-drive.component';

describe('OfflineDriveComponent', () => {
  let component: OfflineDriveComponent;
  let fixture: ComponentFixture<OfflineDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
