import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FacilitiesDescriptions} from "./utilities/faciilities-descriptions";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit{
    public descriptionToDisplay?: string;

    ngOnInit(){
        this.descriptionToDisplay = 'first';
    }

    setDescriptionToDisplay(descriptionName: string){
        this.descriptionToDisplay = descriptionName;
    }

    protected readonly FacilitiesDescriptions = FacilitiesDescriptions;
}
