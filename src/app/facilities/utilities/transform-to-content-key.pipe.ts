import { Pipe, PipeTransform } from '@angular/core';
import {ContentKey} from "../../contents/pl/facilities-content";

@Pipe({
  name: 'transformToContentKey'
})
export class TransformToContentKeyPipe implements PipeTransform {

  transform(key: string): ContentKey {
    return key as ContentKey;
  }

}
