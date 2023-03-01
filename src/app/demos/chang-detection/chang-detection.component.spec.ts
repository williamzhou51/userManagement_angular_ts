import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangDetectionComponent } from './chang-detection.component';

describe('ChangDetectionComponent', () => {
  let component: ChangDetectionComponent;
  let fixture: ComponentFixture<ChangDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangDetectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
