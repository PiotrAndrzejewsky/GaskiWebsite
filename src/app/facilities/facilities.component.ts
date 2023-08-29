import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {FacilitiesContents} from "./utilities/faciilities-descriptions";
import {fadeInStill} from "../shared/animations";
import {FacilityType} from "./utilities/FacilityContent.model";
import {GestureCordinates} from "../shared/gestures.model";
import {GesturesCalcService} from "../shared/gestures-calc.service";
import {Content, contents, ModifiedContent} from "../contents/pl/facilities-content";
import {ContentSelectedService} from "../core/services/content-selected.service";
import {filter, map, Observable, tap} from "rxjs";
import {VisitedService} from "../core/services/visited.service";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [fadeInStill],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FacilitiesComponent {

    protected readonly FacilitiesContents = FacilitiesContents;
    //TODO make proper type here

    readonly contents = contents;

    public description$ = this.state.getState().pipe(
        map((state) => {
            return {title: contents[state].title, description: contents[state].description}
        }),
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
    );

    // to zrobic w swoim komponencie

    // private facilitiesMobileObserver = new IntersectionObserver((entrie) => {
    //    entrie.forEach((entry) => {
    //        if(entry.isIntersecting) {
    //            console.log('costam');
    //        }
    //    })
    //
    // }, { threshold: 0.2, root: document.querySelector('app-component'), rootMargin: '0px' });

    // ngAfterViewInit() {
    //     document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
    //         this.facilitiesMobileObserver.observe(element);
    //     });
    // }

    constructor(private elementRef: ElementRef, private state: ContentSelectedService) {}

}
