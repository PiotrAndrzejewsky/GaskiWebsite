import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigImageComponent } from './big-image.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {GetSelectedImageLinkPipe} from "./utilities/get-selected-image-link.pipe";
import {GetSelectedImageTitlePipe} from "../../pipes/get-selected-image-title.pipe";

describe('BigImageComponent', () => {
  let component: BigImageComponent;
  let fixture: ComponentFixture<BigImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
            BigImageComponent,
            GetSelectedImageLinkPipe,
            GetSelectedImageTitlePipe
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
