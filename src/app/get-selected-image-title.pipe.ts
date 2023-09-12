import { Pipe, PipeTransform } from '@angular/core';
import {ContentKey} from "./contents/pl/facilities-content";

@Pipe({
  name: 'getSelectedImageTitle',
    pure: false
})
export class GetSelectedImageTitlePipe implements PipeTransform {

    transform(images: any): any {
        let result = '';
        Object.keys(images).forEach((key) => {
            if(images[key as ContentKey].isSelected) {
                result =  images[key as ContentKey].title;
            }
        });
        return result;

    }

}
