import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {appearFromBottom, fadeInStill} from "../shared/animations";
import {FacilitiesService} from "../core/services/facilities.service";
import {Facilitie} from "../core/models/facilitie.model";

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

    private observer = new IntersectionObserver((entrie) => {
        entrie.forEach((entry) => {
            if(entry.isIntersecting) {
                this.setVisibilityHolder(entry.target.id);
            }
        })

    }, { threshold: 0.2, root: document.querySelector('app-component'), rootMargin: '0px' });

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

    initializeObserver() {
        document.querySelectorAll('app-facility-descripton-mobile').forEach((element) => {
            this.observer.observe(element);
            this.pushToVisibilityHolder(element.id);
        });
        this.cdr.detectChanges();
    }

    pushToVisibilityHolder(id: string) {
        this.visibilityHolder[id] = { isVisible: false };
    }

    setVisibilityHolder(elementId: string) {
        this.visibilityHolder[elementId].isVisible = true;
        this.cdr.detectChanges()
    }

    setSelected(title: string) {
        this.selected = title;
    }

}
