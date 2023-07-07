import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecEmpLogsComponent } from './view-sec-emp-logs.component';

describe('ViewSecEmpLogsComponent', () => {
  let component: ViewSecEmpLogsComponent;
  let fixture: ComponentFixture<ViewSecEmpLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecEmpLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecEmpLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
