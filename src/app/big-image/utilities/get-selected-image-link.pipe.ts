import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "../../contents/pl/facilities-content";

@Pipe({
  name: 'getSelectedImageLink'
})
export class GetSelectedImageLinkPipe implements PipeTransform {

    transform(images: any): any {
        let link = '';
        Object.keys(images).forEach((key) => {
            if(images[key as Content].isSelected) {
                console.log( images[key as Content].link);
                link =  images[key as Content].link;
            }
        });
        return link;
    }

}
