import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BigImageComponent } from './big-image.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('BigImageComponent', () => {
  let component: BigImageComponent;
  let fixture: ComponentFixture<BigImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
            BigImageComponent,
        ],
        schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(BigImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
