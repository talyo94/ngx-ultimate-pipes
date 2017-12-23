import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floor'
})
export class FloorPipe implements PipeTransform {

  transform(value: number, decimal: boolean = false): number {
    return decimal ? Math.floor(value * 100) / 100 : Math.floor(value);
  }

}
