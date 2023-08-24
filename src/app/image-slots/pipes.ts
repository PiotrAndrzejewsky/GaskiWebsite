import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'getTitle'
})
export class GetTitlePipe implements PipeTransform {
    transform(image: any): string {
        if (!image) return '';
        return image.value.title;
    }
}

@Pipe({
    name: 'getImageLink'
})
export class GetImageLink implements PipeTransform {
    transform(image: any): string {
        if (!image) return '';
        return image.value.link;
    }

}


@Pipe({
    name: 'getIsSelectedValue'
})
export class GetIsSelectedValue implements PipeTransform {
    transform(image: any): string {
        if (!image) return '';
        return image.value.isSelected;
    }
}
