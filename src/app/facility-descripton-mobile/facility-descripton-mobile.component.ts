import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {facilityContent} from "../facilities/utilities/FacilityContent.model";

@Component({
  selector: 'app-facility-descripton-mobile',
  templateUrl: './facility-descripton-mobile.component.html',
  styleUrls: ['./facility-descripton-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacilityDescriptonMobileComponent{
    @Input() content?: any;


}
