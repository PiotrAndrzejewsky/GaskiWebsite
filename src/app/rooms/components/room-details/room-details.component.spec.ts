import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailsComponent } from './room-details.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import { RouterTestingModule} from "@angular/router/testing";

describe('RoomDetailsComponent', () => {
  let component: RoomDetailsComponent;
  let fixture: ComponentFixture<RoomDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [RoomDetailsComponent],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(RoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
