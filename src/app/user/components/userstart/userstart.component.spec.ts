import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstartComponent } from './userstart.component';

describe('UserstartComponent', () => {
  let component: UserstartComponent;
  let fixture: ComponentFixture<UserstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserstartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
