import { Component, Input } from '@angular/core';
import {facilityContent} from "../facilities/utilities/FacilityContent.model";

@Component({
  selector: 'app-facility-description',
  templateUrl: './facility-description.component.html',
  styleUrls: ['./facility-description.component.scss']
})
export class FacilityDescriptionComponent {
    @Input() content?: facilityContent;
}
