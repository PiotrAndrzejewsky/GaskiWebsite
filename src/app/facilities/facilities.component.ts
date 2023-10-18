import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {appearFromBottom, fadeInStill} from "../shared/animations";
import {Contents, contents} from "../contents/pl/facilities-content";
import {FacilitiesService} from "../core/facilities.service";
import {Facilitie} from "../core/facilitie.model";

@Component({
    selector: 'app-facilities',
    templateUrl: './facilities.component.html',
    styleUrls: ['./facilities.component.scss'],
    animations: [fadeInStill, appearFromBottom],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class FacilitiesComponent implements OnInit {

    public visibilityHolder:  {[key: string] : {isVisible: boolean }} = {};

    public facilities?: Facilitie[];

    public selected?: string;

    constructor(private cdr: ChangeDetectorRef, private facilitiesService: FacilitiesService) { }


    ngOnInit() {
        this.getFacilities();
    }

    getFacilities() {
        this.facilitiesService.getFacilities().subscribe((res) => {
            this.facilities = res;
            this.setSelected(this.facilities![0].title);
            this.cdr.detectChanges();
            this.initializeObserver();
        })
    }

    setSelected(title: string) {
        this.selected = title;
    }

    // setIsSelected(key: string) {
    //     Object.keys(this.contentsEnhanced).forEach((keyInstance) => {
    //         this.contentsEnhanced[keyInstance as ContentKey].isSelected = keyInstance === key;
    //     })
    // }

    // setIsVisible(key: ContentKey) {
    //     this.contentsEnhanced[key].isVisible = true;
    //     this.cdr.detectChanges()
    // }

    // private facilitiesMobileObserver = new IntersectionObserver((entrie) => {
    //    entrie.forEach((entry) => {
    //        if(entry.isIntersecting) {
    //            console.log('costam ' + entry.target.id);
    //            this.setIsVisible(entry.target.id as ContentKey);
    //        }
    //    })
    //
    // }, { threshold: 0.2, root: document.querySelector('app-component'), rootMargin: '0px' });

    // ngAfterViewInit() {
    //     document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
    //         this.facilitiesMobileObserver.observe(element);
    //     });
    // }

    private observer = new IntersectionObserver((entrie) => {
        entrie.forEach((entry) => {
            if(entry.isIntersecting) {
                this.setVisibilityHolder(entry.target.id);
            }
        })

    }, { threshold: 0.2, root: document.querySelector('app-component'), rootMargin: '0px' });

    initializeObserver() {
        document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
            this.observer.observe(element);
            this.pushToVisiblityHolder(element.id);
        });
        this.cdr.detectChanges();
    }
    pushToVisiblityHolder(id: string) {
        this.visibilityHolder[id] = { isVisible: false };
    }

    setVisibilityHolder(elementId: string) {
        this.visibilityHolder[elementId].isVisible = true;
        this.cdr.detectChanges()
    }

}
