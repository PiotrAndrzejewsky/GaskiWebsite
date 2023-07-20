import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FacilitiesContents} from "./utilities/faciilities-descriptions";
import {fadeInOut, fadeInStill} from "../shared/animations";
import {FacilityType} from "./utilities/FacilityContent.model";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [fadeInOut, fadeInStill]
})
export class FacilitiesComponent implements AfterViewInit {
    protected readonly FacilitiesContents = FacilitiesContents;
    //TODO make proper type here
    protected contentToDisplay: FacilityType = 'beach';
    //TODO put this property in another variable
    private observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit() {
        document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
            this.observer.observe(element);
        });
    }

    setSelection(idName: string){
        if(this.contentToDisplay === idName as FacilityType)
            return;

        document.querySelector(".selected")?.classList.remove('selected');
        document.querySelector("#"+idName)?.classList.add('selected');

        this.scrollToSection('facilitiesSection');

        this.contentToDisplay = idName as FacilityType;
    }
    scrollToSection(sectionId: string) {
        const targetElement = this.elementRef.nativeElement.querySelector('#'+ sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
