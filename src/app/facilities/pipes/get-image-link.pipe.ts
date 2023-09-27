import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getImageLink'
})
export class GetImageLinkPipe implements PipeTransform {

  transform(key: string): string {
    return ''
  }

}
