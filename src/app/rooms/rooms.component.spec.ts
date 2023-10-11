import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [RoomsComponent],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
