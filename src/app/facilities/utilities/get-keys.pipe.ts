import { Pipe, PipeTransform } from '@angular/core';
import {EnhancedContents} from "../../contents/pl/facilities-content";

@Pipe({
  name: 'getKeys'
})
export class GetKeysPipe implements PipeTransform {

  transform(contents: EnhancedContents): string[] {
    return Object.keys(contents)
  }

}
