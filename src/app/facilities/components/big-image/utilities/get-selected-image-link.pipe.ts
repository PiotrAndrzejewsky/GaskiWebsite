import { Pipe, PipeTransform } from '@angular/core';
import {ContentKey} from "../../../../contents/pl/facilities-content";

@Pipe({
  name: 'getSelectedImageLink',
    pure: false
})
export class GetSelectedImageLinkPipe implements PipeTransform {

    transform(images: any): any {
        let link = 'banana';
        Object.keys(images).forEach((key) => {
            if(images[key as ContentKey].isSelected) {
                console.log( images[key as ContentKey].src);
                link =  images[key as ContentKey].src;
            }
        });
        return link;
    }

}
