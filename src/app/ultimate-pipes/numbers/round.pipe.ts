import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, trail: number = 0): number {
    return Math.round(value * (10 ** trail)) / (10 ** trail);
  }

}
