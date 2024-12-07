import { Pipe, PipeTransform } from '@angular/core';
import moment from 'jalali-moment';
@Pipe({
    name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value) return '';
        const jalaliDate = moment(value).locale('fa').format('D MMMM YYYY');
        return jalaliDate;
    }
}
