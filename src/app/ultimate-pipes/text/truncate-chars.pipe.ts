import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatechars'
})
export class TruncateCharsPipe implements PipeTransform {

  transform(value: string, args: number): string {
    if (value.length < args) {
      return value;
    }
    return `${value.slice(0, args - 3)}...`;
  }

}
