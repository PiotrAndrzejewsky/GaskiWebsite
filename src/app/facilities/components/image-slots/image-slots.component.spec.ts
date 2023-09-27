import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlotsComponent } from './image-slots.component';

describe('ImageSlotsComponent', () => {
  let component: ImageSlotsComponent;
  let fixture: ComponentFixture<ImageSlotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSlotsComponent]
    });
    fixture = TestBed.createComponent(ImageSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
