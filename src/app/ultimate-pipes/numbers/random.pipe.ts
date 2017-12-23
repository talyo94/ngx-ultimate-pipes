import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(value: any, min: number = 0, max: number = 1): any {
    if (max < min) {
      let t = max;
      max = min;
      min = t;
    }

    return Math.floor(Math.random() * (max - min)) + min;
  }

}
