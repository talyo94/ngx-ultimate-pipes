import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseelements'
})
export class ReverseElementsPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return [...value].reverse();
  }

}
