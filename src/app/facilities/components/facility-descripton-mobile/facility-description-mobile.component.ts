import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ContentKey, FacilitieContent} from "../../../contents/pl/facilities-content";

@Component({
  selector: 'app-facility-descripton-mobile',
  templateUrl: './facility-description-mobile.component.html',
  styleUrls: ['./facility-description-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacilityDescriptionMobileComponent {
    @Input() isVisible?: boolean;
    @Input() title?: string;
    @Input() description?: string;
    @Input() link?: string;
}
