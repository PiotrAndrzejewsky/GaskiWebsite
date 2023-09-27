import { Pipe, PipeTransform } from '@angular/core';
import {ContentKey, EnhancedContents} from "../../contents/pl/facilities-content";

@Pipe({
  name: 'getLinkForSelectedImage'
})
export class GetLinkForSelectedImagePipe implements PipeTransform {

  transform(images: EnhancedContents | undefined): string {
      if(!images) return 'bladdd';
      let result: string = 'abanana';
       Object.keys(images).forEach((key) => {
        if(images[key as ContentKey].isSelected)
            result = images[key as ContentKey].src;
    })
      return result;
  }
}
