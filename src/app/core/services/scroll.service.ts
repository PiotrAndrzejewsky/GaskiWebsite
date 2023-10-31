import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }
    resetScrollPosition() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto' // Set behavior to 'auto' for instant scrolling
        });
    }

}
