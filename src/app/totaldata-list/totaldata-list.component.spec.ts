import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldataListComponent } from './totaldata-list.component';

describe('TotaldataListComponent', () => {
  let component: TotaldataListComponent;
  let fixture: ComponentFixture<TotaldataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaldataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
