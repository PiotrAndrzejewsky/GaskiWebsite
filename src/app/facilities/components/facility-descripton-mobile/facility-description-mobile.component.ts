import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

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
