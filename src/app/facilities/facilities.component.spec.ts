import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacilitiesComponent } from './facilities.component';
import {GetSelectedContentPipe} from "./pipes/get-selected-content.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {GetKeysPipe} from "./pipes/get-keys.pipe";
import {TransformToContentKeyPipe} from "./pipes/transform-to-content-key.pipe";


describe('FacilitiesComponent', () => {
  let component: FacilitiesComponent;
  let fixture: ComponentFixture<FacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          FacilitiesComponent,
          GetSelectedContentPipe,
          GetKeysPipe,
          TransformToContentKeyPipe,

      ],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(FacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
