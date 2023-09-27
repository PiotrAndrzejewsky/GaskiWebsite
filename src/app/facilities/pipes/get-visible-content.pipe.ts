import { Pipe, PipeTransform } from '@angular/core';
import {ContentKey, EnhancedContents} from "../../contents/pl/facilities-content";

@Pipe({
  name: 'getVisibleContent'
})

export class GetVisibleContentPipe implements PipeTransform {


    transform(contents: EnhancedContents, key: string): {title: string, description: string, link: string, isVisible: boolean} {
        // pipe dostaje cały kontent i zwraca tylko ten rekord, który jest ustawiony na true
        let result: {title: string, description: string, link: string, isVisible: boolean} = {title: '', description: '', link: '', isVisible: false};
        Object.keys(contents).forEach((key) => {
                result = {title: contents[key as ContentKey].title, description: contents[key as ContentKey].description, link: contents[key as ContentKey].src, isVisible: contents[key as ContentKey].isVisible}
        })
        return result;
    }

}
