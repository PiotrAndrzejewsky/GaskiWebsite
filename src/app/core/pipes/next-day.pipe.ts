import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nextDay'
})
export class NextDayPipe implements PipeTransform {

    transform(value: Date): Date {
        const newValue = new Date(value);
        newValue.setDate(value.getDate() + 1);
        return newValue;
    }

}
