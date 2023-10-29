import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @ViewChild('drawer') drawer?: MatDrawer;

    constructor(private router: Router) {
    }

    moveToMainPage() {
        this.router.navigate(['./']);
        setTimeout(() => {window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });}, 0)
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
        this.drawer?.toggle();
    }

}
