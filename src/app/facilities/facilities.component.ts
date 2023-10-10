import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {appearFromBottom, fadeInStill} from "../shared/animations";
import {ContentKey, Contents, contents, EnhancedContents} from "../contents/pl/facilities-content";

@Component({
    selector: 'app-facilities',
    templateUrl: './facilities.component.html',
    styleUrls: ['./facilities.component.scss'],
    animations: [fadeInStill, appearFromBottom],
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
            }
        }
    }, {} as EnhancedContents)

    constructor(private cdr: ChangeDetectorRef) { }


    ngOnInit() {
        this.setIsSelected(Object.keys(this.contentsEnhanced)[0]);
    }

    setIsSelected(key: string) {
        Object.keys(this.contentsEnhanced).forEach((keyInstance) => {
            this.contentsEnhanced[keyInstance as ContentKey].isSelected = keyInstance === key;
        })
    }

    setIsVisible(key: ContentKey) {
        this.contentsEnhanced[key].isVisible = true;
        this.cdr.detectChanges()
    }

    private facilitiesMobileObserver = new IntersectionObserver((entrie) => {
       entrie.forEach((entry) => {
           if(entry.isIntersecting) {
               console.log('costam ' + entry.target.id);
               this.setIsVisible(entry.target.id as ContentKey);
           }
       })

    }, { threshold: 0.2, root: document.querySelector('app-component'), rootMargin: '0px' });

    ngAfterViewInit() {
        document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
            this.facilitiesMobileObserver.observe(element);
        });
    }


}
