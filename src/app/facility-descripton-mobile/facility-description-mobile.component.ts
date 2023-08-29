import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ContentValues} from "../contents/pl/facilities-content";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-facility-descripton-mobile',
  templateUrl: './facility-description-mobile.component.html',
  styleUrls: ['./facility-description-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacilityDescriptionMobileComponent {

    @Input() content?: any; //TODO think how to make this type?

}
