import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {facilityContent} from "../facilities/utilities/FacilityContent.model";
import {slideFromLeft} from "../shared/animations";

@Component({
  selector: 'app-facility-description',
  templateUrl: './facility-description.component.html',
  styleUrls: ['./facility-description.component.scss'],
    animations: [slideFromLeft],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilityDescriptionComponent {

    @Input() description?: any; //TODO make this propeero type key: title: string, desc: string
}
