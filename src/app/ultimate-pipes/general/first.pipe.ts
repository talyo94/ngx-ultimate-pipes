import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'first'
})
export class FirstPipe implements PipeTransform {

  transform(value: string | any[]): any {
    return Array.isArray(value) ? value[0] : value.charAt(0);
  }

}
