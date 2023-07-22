import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FacilitiesContents} from "./utilities/faciilities-descriptions";
import {fadeInOut, fadeInStill} from "../shared/animations";
import {FacilityType} from "./utilities/FacilityContent.model";
import {GestureCordinates} from "../shared/gestures.model";
import {GesturesCalcService} from "../shared/gestures-calc.service";

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
    public bigImageGesture: GestureCordinates = {initialX: 0, diffX: 0};
    //TODO put this property in another variable
    private observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    constructor(private elementRef: ElementRef, public gestures: GesturesCalcService) {}

    ngAfterViewInit() {
        document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
            this.observer.observe(element);
        });


    }

    setSelection(idName: string){
        document.querySelector("#hint-arrow")?.classList.add("hide");
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
    getAnotherContent(action: string): string {
        //Wydaje mi się, że ten child component nie powinienm tez bidnowac tej zmiennej. wystarczy ze mam w smart component this.contentToDispaly

        let array: string[] = Object.keys(this.FacilitiesContents);
        let index: number = array.indexOf(this.contentToDisplay as string);
        if(index === -1) console.error('somethnik went wrong');
        if(action === 'previous') {
            if(index === 0) {
                return array[array.length-1] as FacilityType;
            }
            else
                return array[index - 1] as FacilityType;
        }
        else {
            if(index === array.length - 1) {
                return array[0];
            }
            else
                return array[index + 1];
        }

    }

    protected readonly console = console;
}
