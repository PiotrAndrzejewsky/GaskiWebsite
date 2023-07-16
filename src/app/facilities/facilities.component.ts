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

    private observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    ngOnInit(){
        this.descriptionToDisplay = 'first';

        document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
            this.observer.observe(element);
        });
    }

    setDescriptionToDisplay(descriptionName: string){
        this.descriptionToDisplay = descriptionName;
    }

    protected readonly FacilitiesDescriptions = FacilitiesDescriptions;
}
