import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { RoomComponent } from './room.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {Router, RouterModule} from "@angular/router";

describe('RoomComponent', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [RoomComponent],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [RouterTestingModule.withRoutes([])]
    });
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



    it('should call the next image method', fakeAsync(() => {
        spyOn(component, 'nextImage');

        let button = fixture.debugElement.nativeElement.querySelector('.right-button');
        button.click();
        tick();
        expect(component.nextImage).toHaveBeenCalled();
    }));




});
