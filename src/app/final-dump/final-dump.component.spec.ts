import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDumpComponent } from './final-dump.component';

describe('FinalDumpComponent', () => {
  let component: FinalDumpComponent;
  let fixture: ComponentFixture<FinalDumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalDumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
