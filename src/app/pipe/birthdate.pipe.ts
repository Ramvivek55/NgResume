import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'birthdate'
})
export class BirthdatePipe implements PipeTransform {

  transform(value: string) {
    var birthpipe =new DatePipe("en-US");
    value = birthpipe.transform(value, 'MMMM d, y')
    return value;
  }

}
