import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {slideFromLeft} from "../../../shared/animations";

@Component({
  selector: 'app-facility-description',
  templateUrl: './facility-description.component.html',
  styleUrls: ['./facility-description.component.scss'],
    animations: [slideFromLeft],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilityDescriptionComponent {

    @Input() content?: {title: string, description: string};
    constructor() {
    }



}
