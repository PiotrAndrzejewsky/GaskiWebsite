import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatDrawer} from "@angular/material/sidenav";
import {rotate} from "../shared/animations";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [rotate]
})
export class NavbarComponent {
    @ViewChild('drawer') drawer?: MatDrawer;

    public isDrawerVisible: boolean = false;

    constructor(private router: Router, private cdr: ChangeDetectorRef) {
    }

    moveToMainPage() {
        this.router.navigate(['./']);
        setTimeout(() => {window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });}, 0)
    }

    scrollDown() {
        const banner = document.querySelector('app-banner');
        const nextSection = document.querySelector('app-rooms');

        if (banner && nextSection) {
            const bannerHeight = banner.getBoundingClientRect().height;
            const offset = window.scrollY + bannerHeight;

            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
        }
    }

    jumpToElement(elementName: string) {

        this.router.navigate(['']).then(() => {
            setTimeout(() => {this.scrollToElement(elementName)}, 0)
        })

        if (this.drawer)
            this.toggleDrawer()
    }

    scrollToElement(elementName: string) {
        let element = document.querySelector('app-' + elementName);
        element?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    toggleDrawer() {
        this.isDrawerVisible = !this.isDrawerVisible;
        this.cdr.detectChanges();
        this.drawer?.toggle();
        this.cdr.detectChanges();
    }

}
