import { Pipe, PipeTransform } from '@angular/core';
import {ContentKey, EnhancedContents} from "../../../../contents/pl/facilities-content";

@Pipe({
  name: 'getSelectedImageLink',
    pure: false
})
export class GetSelectedImageLinkPipe implements PipeTransform {

    transform(images: EnhancedContents): string {
        let link: string = 'banana';
        Object.keys(images).forEach((key) => {
            if(images[key as ContentKey].isSelected) {
                console.log( images[key as ContentKey].src);
                link =  images[key as ContentKey].src;
            }
        });
        return link;
    }

}
