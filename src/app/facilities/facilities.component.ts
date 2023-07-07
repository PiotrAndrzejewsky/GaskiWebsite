import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FacilitiesDescriptions} from "./utilities/faciilities-descriptions";
import {animate, animation, style, transition, trigger} from "@angular/animations";
import {fadeSlideInOutAnimation} from "../shared/animations";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [fadeSlideInOutAnimation]
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
