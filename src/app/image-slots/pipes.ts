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
    name: 'getImageSrc'
})
export class GetImageSrc implements PipeTransform {
    transform(image: any): string {
        if (!image) return '';
        return image.value.src;
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
@Pipe({
    name: 'getIsVisible'
})
export class GetIsVisibleValue implements PipeTransform {
    transform(element: any): string {
        if (!element) return '';
        return element.value.isVisible;
    }
}

@Pipe({
    name: 'getKey'
})
export class GetKeyValue implements PipeTransform {
    transform(element: any): string {
        if (!element) return '';
        return element.key;
    }
}
@Pipe({
    name: 'getDescription'
})
export class getDescription implements PipeTransform {
    transform(element: any): string {
        if (!element) return '';
        return element.value.description;
    }
}

