import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-facility-descripton-mobile',
  templateUrl: './facility-descripton-mobile.component.html',
  styleUrls: ['./facility-descripton-mobile.component.scss']
})
export class FacilityDescriptonMobileComponent {
    @Input() title?: string;
    @Input() description?: string;
}
