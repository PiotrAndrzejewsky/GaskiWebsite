import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FacilitiesContents} from "./utilities/faciilities-descriptions";
import {fadeInStill} from "../shared/animations";
import {FacilityType} from "./utilities/FacilityContent.model";
import {GestureCordinates} from "../shared/gestures.model";
import {GesturesCalcService} from "../shared/gestures-calc.service";
import {Content, contents, ModifiedContent} from "../contents/pl/facilities-content";
import {ContentSelectedService} from "../core/services/content-selected.service";
import {filter, map, tap} from "rxjs";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [fadeInStill]
})

export class FacilitiesComponent implements AfterViewInit {

    protected readonly FacilitiesContents = FacilitiesContents;
    //TODO make proper type here

    readonly contents = contents; // tutaj w tym pliku musze zrobic type i tutaj go uwzglednic i tyle. najlepiej zrobic to po object.keys

    // tutaj chce strukture ze jest keyvalue i jest nazwa state, tytul i opis i tojjest laczone z contents oczywiscie

    public description$ = this.state.getState().pipe( // czyli teraz majac sameg state mapuje to z contentsami zeby dostac obiekt { title: string, descroption: string}
        map((state) => {
            return {title: contents[state].title, description: contents[state].description}
        }),
        tap((desc) => console.log(desc))
    );

    public images$ = this.state.getState().pipe(
        map((state) => {
            return Object.keys(contents).reduce<Record<string, ModifiedContent>>((modifiedContents, key) => { // pojebane ale działa
                modifiedContents[key] = {
                    title: key,
                    link: contents[key as Content].src,
                    isSelected: state == key
                };
                return modifiedContents;
            }, {});
        }),
        tap((res) => {
            console.log('doszlo do ' + res['beach'].link)
        })
    );
    //            let contentArray: {Content: {title:string, link: string, isSelected: boolean}};
// Object.keys(contents).forEach((key) => {
//                 let pom = {title: key, link: contents[key as Content].src, isSelected: state == key}
//             })
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
    constructor(private elementRef: ElementRef, public gestures: GesturesCalcService, private state: ContentSelectedService) {}

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
