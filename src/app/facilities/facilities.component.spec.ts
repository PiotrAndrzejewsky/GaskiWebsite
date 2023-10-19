import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacilitiesComponent } from './facilities.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NO_ERRORS_SCHEMA} from "@angular/core";


describe('FacilitiesComponent', () => {
  let component: FacilitiesComponent;
  let fixture: ComponentFixture<FacilitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          FacilitiesComponent
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
