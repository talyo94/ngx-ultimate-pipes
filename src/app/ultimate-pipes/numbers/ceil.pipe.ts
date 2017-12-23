import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ceil'
})
export class CeilPipe implements PipeTransform {

  transform(value: number, decimal: boolean = false): number {
    return decimal ? Math.ceil(value) : Math.ceil(value * 100) / 100;
  }

}
