import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tally'
})
export class TallyPipe implements PipeTransform {

  transform(value: string[]): {} {
    return value.reduce((total, current) => {
      total[current] = (total[current] || 0) + 1;
      return total;
    }, {});
  }

}
