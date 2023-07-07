import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecVisLogComponent } from './view-sec-vis-log.component';

describe('ViewSecVisLogComponent', () => {
  let component: ViewSecVisLogComponent;
  let fixture: ComponentFixture<ViewSecVisLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecVisLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecVisLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
