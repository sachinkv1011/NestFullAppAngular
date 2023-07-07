import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminVisLogComponent } from './view-admin-vis-log.component';

describe('ViewAdminVisLogComponent', () => {
  let component: ViewAdminVisLogComponent;
  let fixture: ComponentFixture<ViewAdminVisLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminVisLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdminVisLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
