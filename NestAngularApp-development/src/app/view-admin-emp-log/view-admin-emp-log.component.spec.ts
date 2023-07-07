import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminEmpLogComponent } from './view-admin-emp-log.component';

describe('ViewAdminEmpLogComponent', () => {
  let component: ViewAdminEmpLogComponent;
  let fixture: ComponentFixture<ViewAdminEmpLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminEmpLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdminEmpLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
