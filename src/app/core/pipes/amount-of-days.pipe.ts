import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountOfDays'
})
export class AmountOfDaysPipe implements PipeTransform {

    transform(startDate: Date, endDate: Date): number {
        const differenceInDays = Math.floor((endDate.getDate() - startDate.getDate()) ) + 1;
        return Math.abs(differenceInDays);
    }

}
