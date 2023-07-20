import {Component, Input} from '@angular/core';
import {facilityContent} from "../facilities/utilities/FacilityContent.model";

@Component({
  selector: 'app-facility-descripton-mobile',
  templateUrl: './facility-descripton-mobile.component.html',
  styleUrls: ['./facility-descripton-mobile.component.scss']
})
export class FacilityDescriptonMobileComponent {
    @Input() content?: facilityContent;

}
