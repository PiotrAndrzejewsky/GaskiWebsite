import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {fadeInStill} from "../shared/animations";
import {ContentKey, contents, ImagesContent} from "../contents/pl/facilities-content";
import {ContentSelectedService} from "../core/services/content-selected.service";
import { map, Observable} from "rxjs";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [fadeInStill],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FacilitiesComponent {

    readonly contents = contents;


    public description$: Observable<{title: string, description: string}> = this.state.getState().pipe(
        map((state) => {
            return {title: contents[state].title, description: contents[state].description}
        }),
    );


    public images$: Observable<Record<string, ImagesContent>> = this.state.getState().pipe(
        map((state) => {
            return Object.keys(contents).reduce<Record<string, ImagesContent>>((newContent, key) => { // pojebane ale działa
                newContent[key] = {
                    title: key,
                    link: contents[key as ContentKey].src,
                    isSelected: state == key
                };
                return newContent;
            }, {});
        }),
    );

    //TODO try this code in every single ngFor rendered mobile component, with ngOnDestroy hook.

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
