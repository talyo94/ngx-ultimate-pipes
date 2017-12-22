import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value: string, replace: string): string {
    return value.replace(replace, '');
  }

}
