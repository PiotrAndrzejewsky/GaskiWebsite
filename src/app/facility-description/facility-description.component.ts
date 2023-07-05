import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-facility-description',
  templateUrl: './facility-description.component.html',
  styleUrls: ['./facility-description.component.scss']
})
export class FacilityDescriptionComponent {
    @Input() title?: string;
    @Input() description?: string;


}
