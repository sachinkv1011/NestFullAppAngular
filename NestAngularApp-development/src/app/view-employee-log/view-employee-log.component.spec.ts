import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeLogComponent } from './view-employee-log.component';

describe('ViewEmployeeLogComponent', () => {
  let component: ViewEmployeeLogComponent;
  let fixture: ComponentFixture<ViewEmployeeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
