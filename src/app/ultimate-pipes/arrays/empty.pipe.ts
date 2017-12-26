import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'empty'
})
export class EmptyPipe implements PipeTransform {

  transform(value: any[] | {any}): any {
    return Array.isArray(value) ? (<any[]>value).length === 0 : Object.keys(value).length === 0;
  }

}
