import {AfterViewInit, Component} from '@angular/core';
import {FacilitiesContents} from "./utilities/faciilities-descriptions";
import {fadeInOut} from "../shared/animations";
import {FacilityType} from "./utilities/FacilityContent.model";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [fadeInOut]
})
export class FacilitiesComponent implements AfterViewInit {
    protected readonly FacilitiesContents = FacilitiesContents;
    //TODO make proper type here
    protected contentToDisplay: FacilityType = 'beach';
    private observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    ngAfterViewInit() {
        document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
            this.observer.observe(element);
        });
    }

    setDescriptionToDisplay(idName: string){
        if(this.contentToDisplay === idName as FacilityType)
            return;

        document.querySelector(".selected")?.classList.remove('selected');
        document.querySelector("#"+idName)?.classList.add('selected');

        this.contentToDisplay = idName as FacilityType;
    }
}
