import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {

  transform(value: any[] | {}): any {
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return Object.keys(value).length > 0;
  }

}
