import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent {
    public descriptionToDisplay?: string;

    setDescriptionToDisplay(descriptionName: string){
        this.descriptionToDisplay = descriptionName;
    }

}
