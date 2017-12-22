import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultIfFalse'
})
export class DefaultIfFalsePipe implements PipeTransform {

  transform(value: any, defaultValue: string): any {
    if (value === false) {
      return defaultValue;
    }
    return value;
  }

}
