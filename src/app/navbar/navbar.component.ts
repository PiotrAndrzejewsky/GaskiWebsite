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
    }

    scrollToElement(elementName: string) {

        let element = document.querySelector('app-' + elementName);
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if(this.drawer)
            this.toggleDrawer()
    }

    toggleDrawer() {
        this.drawer?.toggle();
    }

}
