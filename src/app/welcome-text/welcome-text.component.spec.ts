import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeTextComponent } from './welcome-text.component';

describe('WelcomeTextComponent', () => {
  let component: WelcomeTextComponent;
  let fixture: ComponentFixture<WelcomeTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeTextComponent]
    });
    fixture = TestBed.createComponent(WelcomeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
