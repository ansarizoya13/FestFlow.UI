import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeebackhomeComponent } from './feebackhome.component';

describe('FeebackhomeComponent', () => {
  let component: FeebackhomeComponent;
  let fixture: ComponentFixture<FeebackhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeebackhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeebackhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
