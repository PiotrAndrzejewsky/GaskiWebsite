import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigImageComponent } from './big-image.component';

describe('BigImageComponent', () => {
  let component: BigImageComponent;
  let fixture: ComponentFixture<BigImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigImageComponent]
    });
    fixture = TestBed.createComponent(BigImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
