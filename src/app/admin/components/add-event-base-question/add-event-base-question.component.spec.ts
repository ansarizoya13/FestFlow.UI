import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventBaseQuestionComponent } from './add-event-base-question.component';

describe('AddEventBaseQuestionComponent', () => {
  let component: AddEventBaseQuestionComponent;
  let fixture: ComponentFixture<AddEventBaseQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEventBaseQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventBaseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
