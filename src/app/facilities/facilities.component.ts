import {ChangeDetectionStrategy, Component, ElementRef, OnInit} from '@angular/core';
import {fadeInStill} from "../shared/animations";
import {ContentKey, Contents, contents, EnhancedContents, FacilitieContent} from "../contents/pl/facilities-content";
import {ContentSelectedService} from "../core/services/content-selected.service";
import { map, Observable} from "rxjs";

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  animations: [fadeInStill],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FacilitiesComponent implements OnInit {

    readonly contents: Contents = contents;


    public contentsEnhanced: EnhancedContents = Object.keys(contents).reduce((acc, cur) => {
        return {
            ...acc,
            [cur]: {
                src: contents[cur as ContentKey].src,
                title: contents[cur as ContentKey].title,
                description: contents[cur as ContentKey].description,
                isVisible: false,
                isSelected: false
            }}
    }, {} as EnhancedContents)

    ngOnInit() {
        this.setIsSelected(Object.keys(this.contentsEnhanced)[0]);
    }

    setIsSelected(key: string) {
        Object.keys(this.contentsEnhanced).forEach((keyInstance) => {
            this.contentsEnhanced[keyInstance as ContentKey].isSelected = keyInstance === key;
        })
        console.log('w  funkcji setujacaej:' + this.contentsEnhanced)
    }
    setIsVisible(key: ContentKey) {
        this.contentsEnhanced[key].isVisible = true;
    }


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
