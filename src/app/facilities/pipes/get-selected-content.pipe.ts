import { Pipe, PipeTransform } from '@angular/core';
import {ContentKey, EnhancedContents} from "../../contents/pl/facilities-content";

@Pipe({
  name: 'getSelectedContent',
    pure: false
})
export class GetSelectedContentPipe implements PipeTransform {

    transform(images: EnhancedContents): {title: string, description: string} {
        let result: {title: string, description: string} = {title: '', description: ''};
        Object.keys(images).forEach((key) => {
            if(images[key as ContentKey].isSelected)
                result = {title: images[key as ContentKey].title, description: images[key as ContentKey].description}
        })
        return result;
    }

}
