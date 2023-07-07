import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplNavbarComponent } from './empl-navbar.component';

describe('EmplNavbarComponent', () => {
  let component: EmplNavbarComponent;
  let fixture: ComponentFixture<EmplNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
