import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'last'
})
export class LastPipe implements PipeTransform {

  transform(value: string | any[]): any {
    return Array.isArray(value) ? value[value.length - 1] : value.charAt(value.length - 1);
  }

}
