import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
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
}
