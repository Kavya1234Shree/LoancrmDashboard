import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FouronlineComponent } from './fouronline.component';

describe('FouronlineComponent', () => {
  let component: FouronlineComponent;
  let fixture: ComponentFixture<FouronlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FouronlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FouronlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
