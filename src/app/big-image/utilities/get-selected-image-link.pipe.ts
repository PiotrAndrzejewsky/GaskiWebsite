import { Pipe, PipeTransform } from '@angular/core';
import {ContentKey} from "../../contents/pl/facilities-content";

@Pipe({
  name: 'getSelectedImageLink'
})
export class GetSelectedImageLinkPipe implements PipeTransform {

    transform(images: any): any {
        let link = '';
        Object.keys(images).forEach((key) => {
            if(images[key as ContentKey].isSelected) {
                console.log( images[key as ContentKey].link);
                link =  images[key as ContentKey].link;
            }
        });
        return link;
    }

}
