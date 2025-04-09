import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventResponsesComponent } from './view-event-responses.component';

describe('ViewEventResponsesComponent', () => {
  let component: ViewEventResponsesComponent;
  let fixture: ComponentFixture<ViewEventResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewEventResponsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEventResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
