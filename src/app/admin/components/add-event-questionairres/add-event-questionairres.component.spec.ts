import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventQuestionairresComponent } from './add-event-questionairres.component';

describe('AddEventQuestionairresComponent', () => {
  let component: AddEventQuestionairresComponent;
  let fixture: ComponentFixture<AddEventQuestionairresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEventQuestionairresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEventQuestionairresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
